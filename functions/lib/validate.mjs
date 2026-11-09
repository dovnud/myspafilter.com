export const PURPOSE = 'filter_reminder';
export const CONSENT_TEXT = "We'll only use your email for this request.";
export const REPLACE_PURPOSE = 'replace_12mo';
export const REPLACE_CONSENT = "We'll only use your email for this reminder. This stores the request and does not send email.";
export const INTERVALS = ['4 weeks', '8 weeks', '3 months', '6 months', '12 months', '24 months'];

const EMAIL = /^[a-z0-9](?:[a-z0-9._%+-]{0,62}[a-z0-9])?@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/;

export function siteHost(hostname) {
  const host = String(hostname || '').toLowerCase();
  return host === 'myspafilter.com'
    || host === 'www.myspafilter.com'
    || host === 'myspafilter.pages.dev'
    || host.endsWith('.myspafilter.pages.dev');
}

export function validEmail(raw) {
  const email = String(raw ?? '').trim().toLowerCase();
  if (email.length < 6 || email.length > 254) return null;
  if (email.includes('..')) return null;
  if (!EMAIL.test(email)) return null;
  return email;
}

export function validPageUrl(raw) {
  let url;
  try { url = new URL(String(raw ?? '')); } catch { return null; }
  if (url.protocol !== 'https:') return null;
  if (url.username || url.password) return null;
  if (url.port && url.port !== '443') return null;
  if (!siteHost(url.hostname)) return null;
  if (!url.pathname.startsWith('/') || url.pathname.length > 300) return null;
  if (url.href.length > 500) return null;
  return url.href;
}

export function validModel(raw) {
  const model = String(raw ?? '').trim().replace(/\s+/g, ' ');
  if (model.length < 1 || model.length > 160) return null;
  if (/[\u0000-\u001F\u007F<>]/.test(model)) return null;
  return model;
}

export function validInstallDate(value, now) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value ?? ''))) return false;
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return false;
  if (value < '1990-01-01') return false;
  const latest = new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  return value <= latest;
}

export function honeypotFilled(fields) {
  return String(fields?.company ?? '').trim() !== '';
}

/** Calendar month 12 months after the request. The signup's only month choice is that interval. */
export function remindMonth(now) {
  const target = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 12, 1));
  return `${target.getUTCFullYear()}-${String(target.getUTCMonth() + 1).padStart(2, '0')}`;
}

export function validPartId(raw) {
  const id = String(raw ?? '').trim().toLowerCase();
  if (!/^[a-z0-9][a-z0-9./_-]{0,119}$/.test(id)) return null;
  if (id.includes('@') || id.includes('..')) return null;
  return id;
}

export function validPartText(raw) {
  const text = String(raw ?? '').trim().replace(/\s+/g, ' ');
  if (!text) return '';
  if (text.length > 160) return null;
  if (/[\u0000-\u001F\u007F<>]/.test(text)) return null;
  return text;
}

export function normalize(fields) {
  const extra = fields?.extra && typeof fields.extra === 'object' && !Array.isArray(fields.extra) ? fields.extra : {};
  return {
    email: fields?.email ?? '',
    page_url: fields?.page_url ?? '',
    purpose: fields?.purpose ?? '',
    consent_text: fields?.consent_text ?? '',
    company: fields?.company ?? '',
    turnstile: fields?.['cf-turnstile-response'] ?? '',
    filter_model: extra.filter_model ?? fields?.filter_model ?? '',
    install_date: extra.install_date ?? fields?.install_date ?? '',
    interval: extra.interval ?? fields?.interval ?? '',
    part_id: extra.part_id ?? fields?.part_id ?? '',
    oem: extra.oem ?? fields?.oem ?? '',
    unicel: extra.unicel ?? fields?.unicel ?? '',
    pleatco: extra.pleatco ?? fields?.pleatco ?? '',
    filbur: extra.filbur ?? fields?.filbur ?? '',
  };
}

function validateReplace(input, now) {
  const email = validEmail(input.email);
  if (!email) return { ok: false, error: 'email' };
  const page_url = validPageUrl(input.page_url);
  if (!page_url) return { ok: false, error: 'page' };
  const part_id = validPartId(input.part_id);
  if (!part_id) return { ok: false, error: 'part' };
  const oem = validPartText(input.oem);
  const unicel = validPartText(input.unicel);
  const pleatco = validPartText(input.pleatco);
  const filbur = validPartText(input.filbur);
  if (oem === null || unicel === null || pleatco === null || filbur === null) return { ok: false, error: 'part' };
  if (!oem && !unicel && !pleatco && !filbur) return { ok: false, error: 'part' };
  if (input.consent_text !== REPLACE_CONSENT) return { ok: false, error: 'consent' };
  const remind_month = remindMonth(now);
  return {
    ok: true,
    record: {
      email,
      page_url,
      purpose: REPLACE_PURPOSE,
      part_id,
      remind_month,
      extra: JSON.stringify({ part_id, oem, unicel, pleatco, filbur, remind_month }),
      consent_text: REPLACE_CONSENT,
    },
  };
}

export function validate(input, now) {
  if (input.purpose === REPLACE_PURPOSE) return validateReplace(input, now);
  if (input.purpose !== PURPOSE) return { ok: false, error: 'purpose' };
  const email = validEmail(input.email);
  if (!email) return { ok: false, error: 'email' };
  const page_url = validPageUrl(input.page_url);
  if (!page_url) return { ok: false, error: 'page' };
  const filter_model = validModel(input.filter_model);
  if (!filter_model) return { ok: false, error: 'model' };
  if (!validInstallDate(input.install_date, now)) return { ok: false, error: 'date' };
  if (!INTERVALS.includes(input.interval)) return { ok: false, error: 'interval' };
  if (input.consent_text !== CONSENT_TEXT) return { ok: false, error: 'consent' };
  return {
    ok: true,
    record: {
      email,
      page_url,
      purpose: PURPOSE,
      part_id: '',
      remind_month: '',
      extra: JSON.stringify({ filter_model, install_date: input.install_date, interval: input.interval }),
      consent_text: CONSENT_TEXT,
    },
  };
}

export function originAllowed(originHeader, requestHost) {
  const host = String(requestHost || '').toLowerCase().replace(/:\d+$/, '');
  let originHost = '';
  if (originHeader) {
    try {
      const url = new URL(originHeader);
      if (url.username || url.password) return false;
      originHost = url.hostname.toLowerCase();
    } catch { return false; }
  }
  const local = (value) => value === 'localhost' || value === '127.0.0.1';
  if (local(host)) return local(originHost);
  if (!originHost || originHost !== host) return false;
  return siteHost(host);
}
