/** One search box: size, part number, or brand/model. Pure functions so the unit tests can run them. */
import { classify } from './xref.mjs';

const NUM = String.raw`(\d+(?:\.\d+)?)(?:[\s-]+(\d+)\/(\d+))?|(\d+)\/(\d+)`;
const num = (m, i) => (m[i] != null ? +m[i] + (m[i + 1] ? +m[i + 1] / +m[i + 2] : 0) : m[i + 3] != null ? +m[i + 3] / +m[i + 4] : null);

/** "7 x 10-3/4", "7\" × 10.75\"", "178 x 273 mm", "6.5 in" -> { a, b, mm } in inches, or null when it is not a size. */
export function parseSize(q) {
  let t = String(q || '').toLowerCase().replace(/[″”“"]/g, ' in ').replace(/×|\*|\bby\b/g, ' x ').replace(/\s+/g, ' ').trim();
  const mm = /\bmm\b|\d\s*mm/.test(t);
  t = t.replace(/(mm|millimet(er|re)s?|inch(es)?|in)\b\.?/g, ' ').replace(/\s+/g, ' ').trim();
  const unit = mm ? 1 / 25.4 : 1;
  const pair = t.match(new RegExp(`^(?:${NUM})\\s*x\\s*(?:${NUM})$`));
  if (pair) {
    const a = num(pair, 1), b = num(pair, 6);
    if (a == null || b == null) return null;
    return { a: Math.min(a, b) * unit, b: Math.max(a, b) * unit, mm };
  }
  const explicit = /(\bmm\b|\d\s*mm|\bin\b|inch|["″”])/.test(String(q || '').toLowerCase());
  const one = t.match(new RegExp(`^(?:${NUM})$`));
  if (one && explicit) { const a = num(one, 1); return a == null ? null : { a: a * unit, b: null, mm }; }
  return null;
}

export const TOL = 0.25;
/** Rows within 0.25 in: a pair matches diameter and length, a single number matches either one. */
export function sizeMatches(rows, size) {
  const near = (x, y) => Math.abs(x - y) <= TOL + 1e-9;
  return rows.filter((r) => (size.b == null ? near(r.d, size.a) || near(r.l, size.a) : near(r.d, size.a) && near(r.l, size.b)));
}

/** Brand and model words: every word must appear in the brand, model or series text. */
export function textMatches(rows, brands, q) {
  const words = String(q || '').toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 1);
  if (!words.length) return { brands: [], rows: [] };
  const has = (s) => words.every((w) => s.toLowerCase().includes(w));
  return { brands: brands.filter(([, name]) => has(name)), rows: rows.filter((r) => has(`${r.n} ${r.s || ''}`)) };
}

/** Decide what the query is and return matches. */
export function search(rows, brands, q) {
  const raw = String(q || '').trim();
  if (!raw) return { kind: 'empty', rows: [], brands: [] };
  const size = parseSize(raw);
  if (size) return { kind: 'size', size, rows: sizeMatches(rows, size), brands: [] };
  if (/\d/.test(raw)) {
    const r = classify(rows, raw);
    const hits = [...r.exact, ...r.token, ...r.partial];
    if (hits.length) return { kind: 'part', part: r, rows: hits, brands: [] };
  }
  const t = textMatches(rows, brands, raw);
  if (t.brands.length || t.rows.length) return { kind: 'text', rows: t.rows, brands: t.brands };
  return { kind: 'none', rows: [], brands: [] };
}
