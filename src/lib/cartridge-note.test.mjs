import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { cartridgeParagraphs } from './cartridgeNote.mjs';

const fitSrc = {
  lt: 'Leisure Time Inc. dealer listing',
  unicel: 'Unicel 2026 Replacement Guide',
  pleatco: 'Pleatco 2023 Catalog',
  hd: 'Home Depot listing for Intex 29001E',
  intex: 'Intex compatible-item list',
  bestway: 'Bestway USA product page',
  layzspa: 'Lay-Z-Spa UK (Bestway) product page',
  spd: 'Spa Parts Depot listing',
  marquis: 'Marquis Spas filter finder',
  hto: 'Hot Tub Outpost OEM listing',
  nordic: 'Nordic Hot Tubs filter chart (2023)',
  arcticdealer: 'Arctic Spas Ontario dealer listing',
  bwcat: 'Bestway Lay-Z-Spa catalog',
  bwman: 'Bestway owner’s manual',
  mqdealer: 'Marquis spa dealer listings',
  beach: 'Beachcomber Hot Tubs product page',
  strong: 'Strong Spas FAQ',
  pdc: 'PDC Spas Common Replacement Filter Elements (2025)',
};

const filters = JSON.parse(readFileSync(new URL('../data/filters.json', import.meta.url), 'utf8')).filters;
const indexable = filters.filter((f) => f.index !== false);

function shingles(text) {
  const words = String(text).replace(/<[^>]+>/g, ' ').toLowerCase().replace(/[^a-z0-9./"-]+/g, ' ').split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i <= words.length - 5; i += 1) set.add(words.slice(i, i + 5).join(' '));
  return set;
}

function jaccard(a, b) {
  let inter = 0;
  for (const s of a) if (b.has(s)) inter += 1;
  const union = a.size + b.size - inter;
  return union ? inter / union : 0;
}

const SHARED = `Measure diameter, length, and both ends, then compare them with the figures above. Steps are in the measuring guide. Open-end and threaded bottoms are explained in the fittings guide. Install notes are in how to install a cartridge. Catalog numbers are compared in how Filbur, Unicel and Pleatco numbers compare. Hose-rinse and soak steps are in how to clean a cartridge. Request a filter replacement reminder. As an Amazon Associate I earn from qualifying purchases.`;

test('indexable cartridge pages do not share a near-duplicate body', () => {
  const docs = indexable.map((f) => ({
    id: `${f.brandSlug}/${f.modelSlug}`,
    set: shingles(`${cartridgeParagraphs(f, filters, fitSrc).join(' ')} ${SHARED}`),
  }));
  const bad = [];
  for (let i = 0; i < docs.length; i += 1) {
    for (let j = i + 1; j < docs.length; j += 1) {
      const score = jaccard(docs[i].set, docs[j].set);
      if (score >= 0.6) bad.push({ a: docs[i].id, b: docs[j].id, score: Number(score.toFixed(3)) });
    }
  }
  bad.sort((a, b) => b.score - a.score);
  assert.deepEqual(bad, [], bad.slice(0, 8).map((x) => `${x.a} vs ${x.b} ${x.score}`).join('; '));
});

test('bullfrog PBF17 and PBF40 name their own fit', () => {
  const a = filters.find((f) => f.modelSlug === 'pbf17');
  const b = filters.find((f) => f.modelSlug === 'pbf40');
  const ta = cartridgeParagraphs(a, filters, fitSrc).join(' ');
  const tb = cartridgeParagraphs(b, filters, fitSrc).join(' ');
  assert.match(ta, /10-00281/);
  assert.match(ta, /STIL/);
  assert.match(tb, /10-00282/);
  assert.match(tb, /Simplicity|A Series|R Series/);
  assert.ok(jaccard(shingles(ta), shingles(tb)) < 0.6);
});
