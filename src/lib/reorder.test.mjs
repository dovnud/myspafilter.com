import { test } from 'node:test';
import assert from 'node:assert/strict';
import { guidanceFor, holidayOpen, indexRow, lookup, parseCount, plan } from './reorder.mjs';

const today = '2026-11-04';

const jacuzzi = {
  brand: 'Jacuzzi', brandSlug: 'jacuzzi', model: '6CH-960 cartridge (OEM 6540-164)', modelSlug: '6ch-960',
  oem: '6540-164', oemAll: '6540-164', unicel: '6CH-960', notes: '',
};
const hotSpring = {
  brand: 'Hot Spring', brandSlug: 'hot-spring', model: 'C-6430 cartridge (OEM 31489)', modelSlug: 'c-6430',
  oem: '31489', oemAll: '31489; 71825; 71826', unicel: 'C-6430',
  notes: 'Leisure Time Inc. notes many models take three cartridges and that some use a Tri-X ceramic cartridge',
};
const sundanceBody = {
  brand: 'Sundance', brandSlug: 'sundance', model: 'C-8326 cartridge (OEM 6540-488)', modelSlug: 'c-8326',
  oem: '6540-488', oemAll: '6540-488', unicel: 'C-8326', notes: '',
};
const sundancePleated = {
  brand: 'Sundance', brandSlug: 'sundance', model: 'C-8380 cartridge (OEM 6540-501)', modelSlug: 'c-8380',
  oem: '6540-501', oemAll: '6540-501', unicel: 'C-8380', notes: '',
};
const bullfrog = {
  brand: 'Bullfrog', brandSlug: 'bullfrog', model: 'PBF40 cartridge (OEM 10-00282)', modelSlug: 'pbf40',
  oem: '10-00282', oemAll: '10-00282', unicel: '', pleatco: 'PBF40', notes: '',
};
const master = {
  brand: 'Master Spas', brandSlug: 'master-spas', model: 'C-8341 cartridge', modelSlug: 'c-8341',
  oem: '', oemAll: '', unicel: 'C-8341', notes: 'two 40 sq ft cartridges required',
};
const caldera = {
  brand: 'Caldera', brandSlug: 'caldera', model: 'C-6430 cartridge (OEM 31489)', modelSlug: 'c-6430',
  oem: '31489', oemAll: '31489; 71825', unicel: 'C-6430',
  notes: 'Models requiring Tri-X cartridges must use the appropriate Tri-X filter.',
};

function replacement(out) {
  return out.blocks.find((b) => b.title === 'Replacement');
}

test('the 2026 gift note is open through December 24 and closed the next day', () => {
  assert.equal(holidayOpen('2026-11-04'), true);
  assert.equal(holidayOpen('2026-12-24'), true);
  assert.equal(holidayOpen('2026-12-25'), false);
  assert.equal(holidayOpen(''), true);
});

test('count must be a whole number the user entered', () => {
  assert.equal(parseCount('').empty, true);
  assert.equal(parseCount('0').error.includes('1 to 12'), true);
  assert.equal(parseCount('13').error.includes('1 to 12'), true);
  assert.equal(parseCount('2.5').error.includes('whole number'), true);
  assert.equal(parseCount('2').count, 2);
});

test('Jacuzzi uses Jacuzzi’s range and does not shorten it for heavy use', () => {
  const out = plan(jacuzzi, { use: 'heavy', count: '1', install: '2025-11-04', rinse: '2026-11-04', today });
  assert.deepEqual(out.profileIds, ['jacuzzi-pleated']);
  assert.deepEqual(replacement(out).dates.map((d) => d.iso), ['2026-11-04', '2027-11-04']);
  assert.match(out.blocks[0].paragraphs[0], /not applied to this Jacuzzi cartridge/);
  assert.match(out.blocks.at(-1).paragraphs[0], /You entered 1/);
  assert.match(out.blocks.at(-1).paragraphs[0], /does not show a price/);
  assert.equal(out.form.model.includes('6CH-960'), true);
});

test('Hot Spring pleated row counts polyester years and does not count TRI-X', () => {
  const out = plan(hotSpring, { use: 'light', count: '3', install: '2024-01-15', today });
  assert.deepEqual(out.profileIds, ['hs-polyester']);
  assert.deepEqual(replacement(out).dates.map((d) => d.iso), ['2026-01-15', '2027-01-15']);
  assert.equal(replacement(out).dates.some((d) => d.iso.startsWith('2028') || d.iso.startsWith('2030')), false);
  assert.match(out.blocks[0].paragraphs[0], /TRI-X interval is not counted/);
  assert.match(out.blocks[1].paragraphs[0], /three of these cartridges/);
  assert.match(out.blocks.at(-1).paragraphs[0], /You entered 3/);
  assert.doesNotMatch(out.blocks.at(-1).paragraphs[0], /\$\s?\d/);
});

test('the three-cartridge housing note stays on the Hot Spring 71825 row', () => {
  assert.match(guidanceFor(hotSpring).housing, /71825/);
  assert.equal(guidanceFor(caldera).housing, '');
  assert.match(guidanceFor(caldera).paragraphs.join(' '), /not counted for this part number/);
  assert.deepEqual(guidanceFor(caldera).profileIds, ['no-calendar']);
});

test('Sundance body and 6540-501 do not receive the disposable 3-month date', () => {
  const body = plan(sundanceBody, { use: 'regular', count: '1', install: '2025-11-04', today });
  assert.deepEqual(body.profileIds, ['no-calendar']);
  assert.equal(replacement(body).dates.length, 0);
  assert.match(body.blocks[0].paragraphs[0], /not one of those named pieces/);
  assert.match(replacement(body).paragraphs[0], /no defined end date/i);

  const pleated = plan(sundancePleated, { use: 'heavy', count: '2', install: '2026-01-31', today });
  assert.equal(replacement(pleated).dates.length, 0);
  assert.match(pleated.blocks[0].paragraphs[0], /6540-501/);
  assert.match(pleated.blocks[0].paragraphs[0], /not counted here/);
  assert.equal(replacement(pleated).dates.some((d) => d.iso === '2026-04-30'), false);
});

test('a brand with no published interval does not inherit Jacuzzi or Hot Spring dates', () => {
  const out = plan(bullfrog, { use: 'regular', count: '2', install: '2024-01-15', rinse: '2026-10-01', today });
  assert.deepEqual(out.profileIds, ['no-calendar']);
  assert.equal(replacement(out).dates.length, 0);
  assert.match(out.blocks[0].paragraphs[0], /does not have a replacement month count/);
  assert.doesNotMatch(JSON.stringify(replacement(out)), /12–24|2–3 years/);
  assert.match(out.blocks.at(-1).paragraphs[0], /You entered 2/);
});

test('Master Spas Eco-Pur count is a housing note, not the spare-set number', () => {
  const out = plan(master, { use: 'regular', count: '1', today });
  assert.match(out.blocks[1].paragraphs[0], /two C-8341/);
  assert.match(out.blocks.at(-1).paragraphs[0], /You entered 1/);
  assert.equal(replacement(out).dates.length, 0);
});

test('empty count asks instead of guessing, and a bad date is rejected', () => {
  const empty = plan(jacuzzi, { use: 'regular', count: '', today });
  assert.match(empty.blocks.at(-1).paragraphs[0], /does not guess/);
  const bad = plan(jacuzzi, { use: 'regular', count: '1', install: '2026-02-31', today });
  assert.match(bad.error, /install date/i);
});

test('lookup selects one exact part, lists shared parts, and prefers a typed part', () => {
  const rows = [hotSpring, caldera, jacuzzi].map((row) => ({ ...row, key: `${row.brandSlug}/${row.modelSlug}`, ...indexRow(row) }));
  const one = lookup(rows, { part: '6CH-960' });
  assert.equal(one.row.modelSlug, '6ch-960');
  const shared = lookup(rows, { part: 'C-6430' });
  assert.equal(shared.choices.length, 2);
  assert.match(shared.message, /more than one cartridge/);
  const typed = lookup(rows, { part: '6CH-960', brandSlug: 'hot-spring', modelSlug: 'c-6430' });
  assert.equal(typed.row.brandSlug, 'jacuzzi');
  const byModel = lookup(rows, { brandSlug: 'bullfrog', modelSlug: 'missing' });
  assert.match(byModel.error, /Choose a brand and a cartridge/);
  const none = lookup(rows, { part: 'ZZZ-999' });
  assert.match(none.error, /does not invent a match/);
});

test('a precomputed guidance object is what the page sends to the browser', () => {
  const guidance = guidanceFor(hotSpring);
  const out = plan({ ...hotSpring, guidance, notes: '' }, { use: 'regular', count: '1', install: '2024-01-15', today });
  assert.deepEqual(out.profileIds, ['hs-polyester']);
  assert.match(out.blocks[1].paragraphs[0], /71825/);
  assert.equal(replacement(out).dates.length, 2);
});

test('no plan invents a price, a countdown, or a dollar amount', () => {
  for (const row of [jacuzzi, hotSpring, sundanceBody, sundancePleated, bullfrog, master, caldera]) {
    const out = plan(row, { use: 'regular', count: '2', install: '2024-06-15', rinse: '2026-10-01', today });
    assert.doesNotMatch(JSON.stringify(out), /\$\s?\d|hurry|act now|countdown|only \d+ days|%\s?off/i);
  }
});
