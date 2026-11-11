import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseSize, search } from './search.mjs';
import { indexParts } from './xref.mjs';
const raw = JSON.parse(readFileSync(new URL('../data/filters.json', import.meta.url))).filters;
const rows = raw.map((f) => { const e = f.equivalents || {}; const i = indexParts([f.oem, f.oemAll, e.unicel, e.pleatco, e.filbur, f.searchTerm]); return { n: `${f.brand} ${f.model}`, s: f.series, d: f.dimensions.diameterIn, l: f.dimensions.lengthIn, wholes: i.wholes, tokens: i.tokens }; });
const brands = [...new Map(raw.map((f) => [f.brandSlug, f.brand])).entries()];
test('sizes parse in inches, fractions and mm', () => {
  assert.deepEqual(parseSize('7 x 10-3/4'), { a: 7, b: 10.75, mm: false });
  assert.deepEqual(parseSize('10.75" × 7"'), { a: 7, b: 10.75, mm: false });
  const m = parseSize('178 x 273 mm'); assert.ok(m.mm && Math.abs(m.a - 7.01) < 0.01);
  assert.equal(parseSize('6540-476'), null); assert.equal(parseSize('C-8326'), null); assert.equal(parseSize('7'), null);
});
test('a size query finds rows', () => { const r = search(rows, brands, '7 x 10-3/4'); assert.equal(r.kind, 'size'); assert.ok(r.rows.length > 0); });
test('a part number query finds rows', () => { for (const q of ['6540-476', 'C-8326', 'PTL47W']) { const r = search(rows, brands, q); assert.equal(r.kind, 'part', q); assert.ok(r.rows.length > 0, q); } });
test('a brand or model query finds rows', () => { const r = search(rows, brands, 'Jacuzzi'); assert.equal(r.kind, 'text'); assert.ok(r.brands.length === 1); const m = search(rows, brands, 'hot spring limelight'); assert.ok(m.rows.length > 0); });
test('nonsense finds nothing', () => { assert.equal(search(rows, brands, 'zzzz qqq').kind, 'none'); });
