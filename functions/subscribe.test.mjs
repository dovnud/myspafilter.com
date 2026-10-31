import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { handlePost, onRequest } from './api/subscribe.js';
import { CONSENT_TEXT, originAllowed, siteHost, validate, validEmail, validInstallDate, validPageUrl } from './lib/validate.mjs';

const now = new Date('2026-10-31T12:00:00.000Z');
const salt = 'test-salt-value-0123456789';

function validBody(overrides = {}) {
  return {
    email: 'owner@example.com',
    page_url: 'https://myspafilter.com/hot-spring/highlife/',
    purpose: 'filter_reminder',
    consent_text: CONSENT_TEXT,
    company: '',
    filter_model: 'Hot Spring Highlife (71825)',
    install_date: '2026-01-15',
    interval: '3 months',
    ...overrides,
  };
}

function memoryDb() {
  const subscribers = [];
  const attempts = [];
  let id = 1;
  return {
    subscribers,
    attempts,
    prepare(sql) {
      const text = sql.replace(/\s+/g, ' ').trim();
      return {
        bind(...params) {
          return {
            async first() {
              if (text.startsWith('SELECT COUNT(*)')) {
                const [ipHash, since] = params;
                return { n: attempts.filter((row) => row.ip_hash === ipHash && row.created_at > since).length };
              }
              if (text.startsWith('SELECT id FROM subscribers')) {
                return subscribers.find((row) => row.email === params[0] && row.purpose === params[1]) || null;
              }
              throw new Error(`unexpected first: ${text}`);
            },
            async run() {
              if (text.startsWith('DELETE FROM submit_attempts')) {
                for (let i = attempts.length - 1; i >= 0; i -= 1) if (attempts[i].created_at < params[0]) attempts.splice(i, 1);
                return { success: true };
              }
              if (text.startsWith('INSERT INTO submit_attempts')) {
                attempts.push({ ip_hash: params[0], created_at: params[1] });
                return { success: true };
              }
              if (text.startsWith('INSERT INTO subscribers')) {
                const row = { id: id++, email: params[0], page_url: params[1], purpose: params[2], extra: params[3], consent_text: params[4], created_at: params[5], ip_hash: params[6] };
                if (subscribers.some((item) => item.email === row.email && item.purpose === row.purpose)) throw new Error('UNIQUE constraint failed: subscribers.email');
                subscribers.push(row);
                return { success: true };
              }
              if (text.startsWith('UPDATE subscribers')) {
                const row = subscribers.find((item) => item.email === params[4] && item.purpose === params[5]);
                if (row) Object.assign(row, { page_url: params[0], extra: params[1], consent_text: params[2], ip_hash: params[3] });
                return { success: true };
              }
              throw new Error(`unexpected run: ${text}`);
            },
          };
        },
      };
    },
  };
}

function post(body, headers = {}) {
  return new Request('https://myspafilter.com/api/subscribe', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      origin: 'https://myspafilter.com',
      'cf-connecting-ip': '203.0.113.10',
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

test('validation accepts a stored reminder and rejects bad fields', () => {
  const good = validate({
    purpose: 'filter_reminder',
    email: ' Owner@Example.com ',
    page_url: 'https://www.myspafilter.com/filter/c-4326/',
    filter_model: '  Hot Spring   Highlife  ',
    install_date: '2026-10-31',
    interval: '12 months',
    consent_text: CONSENT_TEXT,
  }, now);
  assert.equal(good.ok, true);
  assert.equal(good.record.email, 'owner@example.com');
  assert.deepEqual(JSON.parse(good.record.extra), { filter_model: 'Hot Spring Highlife', install_date: '2026-10-31', interval: '12 months' });
  assert.equal(validEmail('not-an-email'), null);
  assert.equal(validPageUrl('http://myspafilter.com/hot-spring/'), null);
  assert.equal(validPageUrl('https://user:pass@myspafilter.com/'), null);
  assert.equal(validPageUrl('https://evil.example/myspafilter.com/'), null);
  assert.equal(validInstallDate('2026-02-31', now), false);
  assert.equal(validInstallDate('2026-12-01', now), false);
  assert.equal(validInstallDate('1989-12-31', now), false);
  assert.equal(siteHost('localhost'), false);
  assert.equal(siteHost('notmyspafilter.pages.dev'), false);
  assert.equal(siteHost('preview.myspafilter.pages.dev'), true);
  assert.equal(originAllowed('https://myspafilter.com', 'www.myspafilter.com'), false);
  assert.equal(originAllowed('http://localhost:4321', 'localhost'), true);
  assert.equal(validate({ ...good.record, purpose: 'newsletter', consent_text: CONSENT_TEXT, filter_model: 'X', install_date: '2026-01-01', interval: '4 weeks', email: 'a@b.co', page_url: 'https://myspafilter.com/' }, now).ok, false);
});

test('stores a request, dedupes, and does not return the ip or email', async () => {
  const db = memoryDb();
  const env = { DB: db, IP_HASH_SALT: salt };
  const first = await handlePost(post(validBody()), env, now);
  const created = await first.json();
  assert.equal(first.status, 200);
  assert.equal(created.stored, 'created');
  assert.equal(created.message.includes('did not send an email'), true);
  assert.equal(JSON.stringify(created).includes('203.0.113.10'), false);
  assert.equal(JSON.stringify(created).includes('owner@example.com'), false);
  assert.equal(db.subscribers.length, 1);
  assert.equal(db.subscribers[0].ip_hash.length, 64);
  assert.equal(db.subscribers[0].ip_hash.includes('203.0.113.10'), false);
  const createdAt = db.subscribers[0].created_at;
  const second = await handlePost(post(validBody({ install_date: '2026-02-01', interval: '6 months' })), env, new Date('2026-10-31T13:00:00.000Z'));
  const updated = await second.json();
  assert.equal(updated.stored, 'updated');
  assert.equal(db.subscribers.length, 1);
  assert.equal(db.subscribers[0].created_at, createdAt);
  assert.equal(JSON.parse(db.subscribers[0].extra).interval, '6 months');
});

test('honeypot and rate limit do not create extra rows', async () => {
  const db = memoryDb();
  const env = { DB: db, IP_HASH_SALT: salt };
  const trap = await handlePost(post(validBody({ company: 'acme' })), env, now);
  assert.equal(trap.status, 200);
  assert.equal(db.subscribers.length, 0);
  assert.equal(db.attempts.length, 1);
  for (let i = 0; i < 8; i += 1) {
    const response = await handlePost(post(validBody({ email: `owner${i}@example.com` }), { 'cf-connecting-ip': '203.0.113.20' }), env, now);
    assert.equal(response.status, 200);
  }
  const blocked = await handlePost(post(validBody({ email: 'overflow@example.com' }), { 'cf-connecting-ip': '203.0.113.20' }), env, now);
  assert.equal(blocked.status, 429);
  assert.equal(db.subscribers.some((row) => row.email === 'overflow@example.com'), false);
});

test('rejects cross-origin, missing storage, and failed turnstile', async () => {
  const db = memoryDb();
  const missing = await handlePost(post(validBody()), { DB: db }, now);
  assert.equal(missing.status, 503);
  const foreign = await handlePost(post(validBody(), { origin: 'https://example.com' }), { DB: db, IP_HASH_SALT: salt }, now);
  assert.equal(foreign.status, 403);
  const original = globalThis.fetch;
  globalThis.fetch = async (_url, init) => {
    const params = new URLSearchParams(init.body);
    assert.equal(params.get('response'), 'token');
    return new Response(JSON.stringify({ success: true, action: 'filter_reminder', hostname: 'localhost' }), { status: 200 });
  };
  try {
    const badHost = await handlePost(post(validBody({ 'cf-turnstile-response': 'token' })), { DB: db, IP_HASH_SALT: salt, TURNSTILE_SECRET: 'turnstile-secret' }, now);
    assert.equal(badHost.status, 403);
    assert.equal(db.subscribers.length, 0);
    globalThis.fetch = async () => new Response(JSON.stringify({ success: true, action: 'filter_reminder', hostname: 'myspafilter.com' }), { status: 200 });
    const ok = await handlePost(post(validBody({ 'cf-turnstile-response': 'token' })), { DB: db, IP_HASH_SALT: salt, TURNSTILE_SECRET: 'turnstile-secret' }, now);
    assert.equal(ok.status, 200);
    assert.equal(db.subscribers.length, 1);
  } finally {
    globalThis.fetch = original;
  }
  const method = await onRequest({ request: new Request('https://myspafilter.com/api/subscribe'), env: {} });
  assert.equal(method.status, 405);
});

test('form and privacy copy stay honest and off filter mailto links', () => {
  const form = readFileSync(new URL('../src/components/ReminderForm.astro', import.meta.url), 'utf8');
  const privacy = readFileSync(new URL('../src/pages/privacy.astro', import.meta.url), 'utf8');
  const model = readFileSync(new URL('../src/pages/[brand]/[model]/index.astro', import.meta.url), 'utf8');
  const part = readFileSync(new URL('../src/pages/filter/[part].astro', import.meta.url), 'utf8');
  assert.match(form, /Request a filter replacement reminder/);
  assert.match(form, /We'll only use your email for this request\./);
  assert.equal(form.includes('mailto:'), false);
  assert.equal(form.includes('newsletter'), false);
  assert.match(privacy, /We'll only use your email for this request\./);
  assert.match(privacy, /contact@myspafilter.com/);
  assert.match(privacy, /do not sell/);
  assert.equal(privacy.includes('gmail.com'), false);
  assert.match(model, /ReminderForm/);
  assert.match(part, /ReminderForm/);
});
