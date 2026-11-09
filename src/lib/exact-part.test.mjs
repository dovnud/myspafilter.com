import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { exactFromFilter, signupsForFitment, singleCatalogNumber } from './exact-part.mjs';

const filters = JSON.parse(readFileSync(new URL('../data/filters.json', import.meta.url), 'utf8')).filters;
const byHref = new Map(filters.map((filter) => [`/${filter.brandSlug}/${filter.modelSlug}/`, filter]));

test('dataset rows keep the published OEM and catalog numbers', () => {
  assert.ok(filters.length > 0);
  for (const filter of filters) {
    const exact = exactFromFilter(filter);
    assert.match(exact.partId, /^[a-z0-9-]+\/[a-z0-9-]+$/);
    assert.equal(exact.partId.includes('@'), false);
    assert.equal(exact.unicel, String(filter.equivalents?.unicel || '').trim());
    assert.equal(exact.pleatco, String(filter.equivalents?.pleatco || '').trim());
    assert.equal(exact.filbur, String(filter.equivalents?.filbur || '').trim());
    if (filter.oem || filter.oemAll) assert.ok(exact.oem);
  }
});

test('fitment signups follow cartridge links and skip rows with no part number', () => {
  const sample = filters.find((filter) => filter.brandSlug && filter.modelSlug && filter.oem);
  const page = {
    slug: 'example-filter-by-model-year',
    parts: [
      { oem: '71825 (also 31489)', unicel: 'C-6430 (4 oz); C-6330 (3 oz)', href: [`/${sample.brandSlug}/${sample.modelSlug}/`] },
      { oem: 'No part number published', unicel: 'None listed' },
      { oem: '79435 (Tri-X)', unicel: 'None listed' },
    ],
  };
  const signups = signupsForFitment(page, filters);
  assert.equal(signups[0].partId, `${sample.brandSlug}/${sample.modelSlug}`);
  assert.equal(signups[0].unicel, String(sample.equivalents?.unicel || '').trim());
  assert.equal(signups[0].pleatco, String(sample.equivalents?.pleatco || '').trim());
  assert.equal(signups[0].filbur, String(sample.equivalents?.filbur || '').trim());
  const trix = signups.find((row) => row.oem.startsWith('79435'));
  assert.ok(trix);
  assert.equal(trix.unicel, '');
  assert.equal(trix.pleatco, '');
  assert.equal(trix.filbur, '');
  assert.equal(signups.some((row) => /no part number/i.test(row.oem)), false);
  assert.equal(singleCatalogNumber('C-7375'), 'C-7375');
  assert.equal(singleCatalogNumber('None listed'), '');
  assert.equal(singleCatalogNumber('C-6430 (4 oz media); C-6330'), '');
});

test('every fitment cartridge link resolves to one signup', () => {
  const files = readdirSync(new URL('.', import.meta.url)).filter((name) => /^fitment\d*\.ts$/.test(name));
  const hrefs = new Set();
  for (const file of files) {
    const text = readFileSync(new URL(file, import.meta.url), 'utf8');
    for (const block of text.matchAll(/href:\s*\[([^\]]+)\]/g)) {
      for (const href of block[1].matchAll(/'([^']+)'/g)) hrefs.add(href[1]);
    }
  }
  assert.ok(hrefs.size > 0);
  const missing = [...hrefs].filter((href) => !byHref.has(href));
  assert.deepEqual(missing, []);
  const signups = signupsForFitment({ slug: 'all', parts: [{ oem: '1', href: [...hrefs] }] }, filters);
  assert.equal(signups.length, new Set([...hrefs].map((href) => byHref.get(href)).map((filter) => `${filter.brandSlug}/${filter.modelSlug}`)).size);
});
