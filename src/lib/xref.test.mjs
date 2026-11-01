import { test } from 'node:test';
import assert from 'node:assert/strict';
import { classify, indexParts, norm } from './xref.mjs';

const row = (id, raws) => ({ id, ...indexParts(raws) });
const rows = [
  row('c7350', ['C-7350', 'PWK25-4/PWK40']),
  row('caldera', ['73531', 'C-7375']),
  row('sundance', ['6540-476']),
];

test('normalization ignores hyphens and case', () => {
  assert.equal(norm('C-7350'), 'c7350');
  assert.equal(norm('  c 7350 '), 'c7350');
});

test('a slash is two part numbers, and a 4-digit run is a token', () => {
  const indexed = indexParts(['PWK25-4/PWK40', 'C-7350']);
  assert.ok(indexed.wholes.includes('pwk254'));
  assert.ok(indexed.wholes.includes('pwk40'));
  assert.ok(indexed.wholes.includes('c7350'));
  assert.ok(indexed.tokens.includes('7350'));
  assert.equal(indexed.wholes.includes('7350'), false);
});

test('exact, token, and partial stays distinct', () => {
  const exact = classify(rows, 'C-7350');
  assert.equal(exact.kind, 'match');
  assert.deepEqual(exact.exact.map((r) => r.id), ['c7350']);
  assert.equal(exact.token.length, 0);

  const token = classify(rows, '7350');
  assert.equal(token.kind, 'match');
  assert.equal(token.exact.length, 0);
  assert.deepEqual(token.token.map((r) => r.id), ['c7350']);

  const compound = classify(rows, 'PWK25-4/PWK40');
  assert.equal(compound.kind, 'match');
  assert.deepEqual(compound.exact.map((r) => r.id), ['c7350']);

  const partial = classify(rows, '7353');
  assert.equal(partial.kind, 'partial');
  assert.deepEqual(partial.partial.map((r) => r.id), ['caldera']);

  assert.equal(classify(rows, 'Jacuzzi').kind, 'need-number');
  assert.equal(classify(rows, '99999').kind, 'none');
});
