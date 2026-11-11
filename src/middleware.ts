import { defineMiddleware } from 'astro:middleware';
/**
 * One affiliate disclosure per page, next to the first set of retailer buttons.
 * BuyLinks, ProductPicks and the guide quick pick each render a data-amazon-disclosure note; when a page has several,
 * their sentences are merged into the first note (duplicates dropped) and the later notes are removed.
 */
const NOTE = /<p class="amz-note" data-amazon-disclosure[^>]*><small[^>]*>([\s\S]*?)<\/small><\/p>/g;
const LEAD = 'Disclosure: we may earn a commission from qualifying purchases made through retailer links on this site, at no extra cost to you.';
const ASSOC = 'As an Amazon Associate I earn from qualifying purchases.';
const sentences = (h: string) => h.trim().split(/(?<=[.!?])\s+(?=[A-Z<“"])/).map((x) => x.trim()).filter(Boolean);
// Same point made by two components in different words: keep the first.
const topic = (t: string) => /Product Advertising API/.test(t) ? 'photo' : /^These are affiliate links\.$/.test(t) ? 'aff' : /are affiliate links/.test(t) ? 'aff' : /^(Verify dimensions|Check size)/.test(t) ? 'verify' : t.toLowerCase();
export const onRequest = defineMiddleware(async (_ctx, next) => {
  const res = await next();
  if (!(res.headers.get('content-type') || '').includes('text/html')) return res;
  const html = await res.text();
  const notes = [...html.matchAll(NOTE)];
  const headers = new Headers(res.headers); headers.delete('content-length');
  const init = { status: res.status, statusText: res.statusText, headers };
  if (!notes.length) return new Response(html, init);
  const seen = new Set<string>(); const body: string[] = []; let link = '';
  for (const n of notes) for (const s of sentences(n[1])) {
    if (s === ASSOC || s === LEAD) continue;
    if (s.includes('/affiliate-disclosure/')) { link ||= 'See our <a href="/affiliate-disclosure/">affiliate disclosure</a>.'; continue; }
    const k = topic(s.replace(/<[^>]+>/g, '')); if (seen.has(k)) continue; seen.add(k); body.push(s);
  }
  const merged = `<p class="amz-note" data-amazon-disclosure><small>${LEAD} ${ASSOC} ${body.join(' ')} ${link}</small></p>`.replace(/\s+<\/small>/, '</small>');
  let i = 0;
  const out = html.replace(NOTE, () => (i++ === 0 ? merged : ''));
  return new Response(out, init);
});
