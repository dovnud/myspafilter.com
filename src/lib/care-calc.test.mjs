import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { addDays, addMonths, compute, FORM_INTERVALS } from './care-calc.mjs';

const today = '2026-11-01';

test('month-end addition does not spill into the next month', () => {
  assert.equal(addMonths('2026-01-31', 1), '2026-02-28');
  assert.equal(addMonths('2024-01-31', 1), '2024-02-29');
  assert.equal(addMonths('2024-06-15', 24), '2026-06-15');
  assert.equal(addMonths('2020-01-31', 48), '2024-01-31');
  assert.equal(addMonths('2020-01-31', 72), '2026-01-31');
  assert.equal(addDays('2026-11-01', 14), '2026-11-15');
});

test('stored intervals match the reminder form', () => {
  const src = readFileSync(new URL('../../functions/lib/validate.mjs', import.meta.url), 'utf8');
  const found = src.match(/export const INTERVALS = (\[[^\]]+\])/);
  assert.ok(found);
  assert.deepEqual(FORM_INTERVALS, JSON.parse(found[1].replace(/'/g, '"')));
});

test('Jacuzzi replacement is a range, and heavy use does not shorten it', () => {
  const out = compute({ profileId: 'jacuzzi-pleated', use: 'heavy', install: '2025-11-01', rinse: '2026-11-01', today });
  const rep = out.blocks[0];
  assert.deepEqual(rep.dates.map((d) => d.iso), ['2026-11-01', '2027-11-01']);
  assert.match(rep.paragraphs[0], /12–24 months/);
  assert.match(rep.paragraphs[0], /does not pick a day/);
  assert.equal(out.form.interval, '');
  const clean = out.blocks[1];
  assert.match(clean.paragraphs[0], /consider/i);
  assert.deepEqual(clean.dates.map((d) => d.iso), ['2026-11-03', '2026-11-04', '2026-11-22', '2026-11-29']);
});

test('Hot Spring polyester stays inside 2–3 years and does not pretend 24 months is the whole interval', () => {
  const out = compute({ profileId: 'hs-polyester', use: 'light', install: '2024-06-15', today });
  assert.deepEqual(out.blocks[0].dates.map((d) => d.iso), ['2026-06-15', '2027-06-15']);
  assert.match(out.blocks[0].paragraphs[0], /different sentences/);
  assert.match(out.blocks[1].paragraphs[0], /does not change the month/);
  assert.equal(out.form.interval, '');
  assert.match(out.form.note, /short end/);
});

test('TRI-X shows three years and 4–6 years and does not average them', () => {
  const out = compute({ profileId: 'hs-trix', use: 'regular', install: '2020-01-31', today });
  assert.deepEqual(out.blocks[0].dates.map((d) => d.iso), ['2023-01-31', '2024-01-31', '2026-01-31']);
  assert.match(out.blocks[0].paragraphs[0], /do not agree/);
  assert.match(out.blocks[0].paragraphs[0], /does not average/);
  assert.equal(out.form.interval, '');
  assert.doesNotMatch(out.form.note, /24 months is Hot Spring/);
});

test('Sundance intervals stay exact, including the 4-month insert the form cannot store', () => {
  const pleated = compute({ profileId: 'sd680-pleated', use: 'regular', install: '2025-11-01', today });
  assert.equal(pleated.form.interval, '12 months');
  assert.deepEqual(pleated.blocks[0].dates.map((d) => d.iso), ['2026-11-01']);

  const insert = compute({ profileId: 'sd680-insert', use: 'heavy', install: '2026-01-31', today });
  assert.equal(insert.form.interval, '');
  assert.deepEqual(insert.blocks[0].dates.map((d) => d.iso), ['2026-05-31']);
  assert.match(insert.blocks[1].paragraphs[0], /no chemicals/i);
  assert.equal(insert.blocks[1].dates.length, 0);
  assert.match(insert.form.note, /neither is 4 months/);

  const disposable = compute({ profileId: 'sd780-disposable', use: 'regular', install: '2026-01-31', today });
  assert.equal(disposable.form.interval, '3 months');
  assert.deepEqual(disposable.blocks[0].dates.map((d) => d.iso), ['2026-04-30']);
  assert.match(disposable.blocks[0].paragraphs[0], /or earlier/i);
});

test('Unicel does not get a replacement date, and the pool gauge is not applied to a spa', () => {
  const out = compute({ profileId: 'no-calendar', use: 'heavy', install: '2024-01-01', rinse: '2026-10-01', today });
  assert.equal(out.blocks[0].dates.length, 0);
  assert.match(out.blocks[0].paragraphs[0], /no defined end date/i);
  assert.match(out.blocks[1].paragraphs[0], /swimming-pool/);
  assert.match(out.blocks[1].paragraphs[0], /not averaged/i);
  assert.deepEqual(out.blocks[1].dates.map((d) => d.iso), ['2026-10-15']);
  assert.equal(out.form.interval, '');
});

test('no profile invents a price or a countdown', () => {
  for (const profileId of ['jacuzzi-pleated', 'hs-polyester', 'hs-trix', 'sd680-pleated', 'sd680-insert', 'sd780-disposable', 'no-calendar']) {
    const out = compute({ profileId, use: 'regular', install: '2024-01-15', rinse: '2026-10-01', today });
    const text = JSON.stringify(out);
    assert.doesNotMatch(text, /\$\s?\d|hurry|act now|countdown|only \d+ days/i);
  }
});
