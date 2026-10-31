import { honeypotFilled, normalize, originAllowed, PURPOSE, siteHost, validate } from '../lib/validate.mjs';

const HOUR_LIMIT = 8;
const DAY_LIMIT = 24;
const MESSAGES = {
  purpose: 'This form cannot store that request.',
  email: 'Enter a valid email address.',
  page: 'That page is not on this site.',
  model: 'Enter the filter model.',
  date: 'Enter an install date.',
  interval: 'Choose a replacement interval.',
  consent: "Check the box to confirm we'll only use your email for this request.",
  bad_body: 'Could not read that submission.',
  too_large: 'That submission is too large.',
  forbidden: "We couldn't confirm this submission. Reload the page and try again.",
  rate: 'Too many requests from this network. Try again later.',
  unavailable: 'Storage is not available right now.',
  failed: 'Could not store the request.',
  created: 'Stored. We kept this request and did not send an email.',
  updated: 'This request was already stored. We updated the details on file. No email was sent.',
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

function respond(request, status, message, extra) {
  const headers = { 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' };
  const type = request.headers.get('content-type') || '';
  const accept = request.headers.get('accept') || '';
  const wantsJson = type.includes('application/json') || accept.includes('application/json');
  if (wantsJson) {
    const body = { ok: status < 300, message };
    if (extra?.stored) body.stored = extra.stored;
    return new Response(JSON.stringify(body), { status, headers: { ...headers, 'content-type': 'application/json; charset=utf-8' } });
  }
  const back = extra?.back ? `<p><a href="${escapeHtml(extra.back)}">Back</a></p>` : '';
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${escapeHtml(message)}</title></head><body style="font:1.05rem/1.5 system-ui,sans-serif;max-width:40rem;margin:2rem auto;padding:0 1rem"><p>${escapeHtml(message)}</p>${back}</body></html>`;
  return new Response(html, { status, headers: { ...headers, 'content-type': 'text/html; charset=utf-8' } });
}

async function readFields(request) {
  const declared = Number(request.headers.get('content-length') || 0);
  if (Number.isFinite(declared) && declared > 4096) return { error: 'too_large' };
  const buf = await request.arrayBuffer();
  if (buf.byteLength > 4096) return { error: 'too_large' };
  const type = (request.headers.get('content-type') || '').toLowerCase();
  const text = new TextDecoder().decode(buf);
  try {
    if (type.includes('application/json')) {
      const data = JSON.parse(text || 'null');
      if (!data || typeof data !== 'object' || Array.isArray(data)) return { error: 'bad_body' };
      return { fields: data };
    }
    if (type.includes('multipart/form-data')) {
      const form = await new Request(request.url, { method: 'POST', headers: { 'content-type': request.headers.get('content-type') }, body: buf }).formData();
      const fields = {};
      for (const [key, value] of form.entries()) if (typeof value === 'string') fields[key] = value;
      return { fields };
    }
    return { fields: Object.fromEntries(new URLSearchParams(text).entries()) };
  } catch {
    return { error: 'bad_body' };
  }
}

async function hashIp(ip, salt) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${salt}:${ip}`));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function requestHost(request) {
  let urlHost = '';
  try { urlHost = new URL(request.url).hostname.toLowerCase(); } catch { /* ignore */ }
  const header = (request.headers.get('host') || '').toLowerCase().replace(/:\d+$/, '');
  if (header && urlHost && header !== urlHost) return '';
  return header || urlHost;
}

async function turnstileOk(secret, token, ip) {
  if (typeof token !== 'string' || token.length === 0 || token.length > 2048) return false;
  let result;
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) return false;
    result = await response.json();
  } catch {
    return false;
  }
  return result?.success === true && result.action === PURPOSE && siteHost(result.hostname);
}

async function rateLimited(db, ipHash, now) {
  const hourAgo = new Date(now.getTime() - 60 * 60 * 1000).toISOString();
  const dayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
  const keepAfter = new Date(now.getTime() - 48 * 60 * 60 * 1000).toISOString();
  await db.prepare('DELETE FROM submit_attempts WHERE created_at < ?').bind(keepAfter).run();
  const hour = await db.prepare('SELECT COUNT(*) AS n FROM submit_attempts WHERE ip_hash = ? AND created_at > ?').bind(ipHash, hourAgo).first();
  const day = await db.prepare('SELECT COUNT(*) AS n FROM submit_attempts WHERE ip_hash = ? AND created_at > ?').bind(ipHash, dayAgo).first();
  if (Number(hour?.n || 0) >= HOUR_LIMIT || Number(day?.n || 0) >= DAY_LIMIT) return true;
  await db.prepare('INSERT INTO submit_attempts (ip_hash, created_at) VALUES (?, ?)').bind(ipHash, now.toISOString()).run();
  return false;
}

async function store(db, record, ipHash, now) {
  const createdAt = now.toISOString();
  const existing = await db.prepare('SELECT id FROM subscribers WHERE email = ? AND purpose = ?').bind(record.email, record.purpose).first();
  if (!existing) {
    try {
      await db.prepare('INSERT INTO subscribers (email, page_url, purpose, extra, consent_text, created_at, ip_hash) VALUES (?, ?, ?, ?, ?, ?, ?)').bind(record.email, record.page_url, record.purpose, record.extra, record.consent_text, createdAt, ipHash).run();
      return 'created';
    } catch (error) {
      if (!String(error?.message || error).includes('UNIQUE')) throw error;
    }
  }
  await db.prepare('UPDATE subscribers SET page_url = ?, extra = ?, consent_text = ?, ip_hash = ? WHERE email = ? AND purpose = ?').bind(record.page_url, record.extra, record.consent_text, ipHash, record.email, record.purpose).run();
  return 'updated';
}

export async function handlePost(request, env, now = new Date()) {
  if (!originAllowed(request.headers.get('origin'), requestHost(request))) return respond(request, 403, MESSAGES.forbidden);
  const read = await readFields(request);
  if (read.error) return respond(request, read.error === 'too_large' ? 413 : 400, MESSAGES[read.error]);
  const input = normalize(read.fields);
  const host = requestHost(request);
  const local = host === 'localhost' || host === '127.0.0.1';
  let ip = request.headers.get('cf-connecting-ip') || '';
  if (!ip && local) ip = 'local';
  if (!ip || ip.length > 80) return respond(request, 400, MESSAGES.failed);
  if (!env?.DB || typeof env.IP_HASH_SALT !== 'string' || env.IP_HASH_SALT.length < 16) return respond(request, 503, MESSAGES.unavailable);
  const ipHash = await hashIp(ip, env.IP_HASH_SALT);
  if (await rateLimited(env.DB, ipHash, now)) return respond(request, 429, MESSAGES.rate);
  if (env.TURNSTILE_SECRET) {
    const ok = await turnstileOk(env.TURNSTILE_SECRET, input.turnstile, ip === 'local' ? '' : ip);
    if (!ok) return respond(request, 403, MESSAGES.forbidden);
  }
  if (honeypotFilled(input)) return respond(request, 200, MESSAGES.created, { stored: 'created' });
  const parsed = validate(input, now);
  if (!parsed.ok) return respond(request, 400, MESSAGES[parsed.error]);
  try {
    const stored = await store(env.DB, parsed.record, ipHash, now);
    return respond(request, 200, MESSAGES[stored], { stored, back: parsed.record.page_url });
  } catch {
    return respond(request, 500, MESSAGES.failed);
  }
}

export async function onRequest(context) {
  if (context.request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: { allow: 'POST', 'cache-control': 'no-store' } });
  }
  return handlePost(context.request, context.env);
}
