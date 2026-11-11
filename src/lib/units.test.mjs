import test from 'node:test';
import assert from 'node:assert/strict';
import { toMm, inMm, leadInch, fitKind, fitMm } from './units.mjs';
test('inch to mm rounds to the nearest mm', () => { assert.equal(toMm(4.625), 117); assert.equal(toMm(10.75), 273); assert.equal(toMm(null), null); });
test('inMm appends mm only when a number exists', () => { assert.equal(inMm('7"', 7), '7" (178 mm)'); assert.equal(inMm('7"', null), '7"'); });
test('leading fraction is parsed', () => { assert.equal(leadInch('2-1/8" / open'), 2.125); assert.equal(leadInch('1-15/16" / open'), 1 + 15 / 16); assert.equal(leadInch('semi-circular handle'), null); });
test('only open ends get mm', () => { assert.equal(fitMm('2-1/8" / open'), '2-1/8" (54 mm) / open'); assert.equal(fitMm('1-1/2” male thread/MPT'), '1-1/2” male thread/MPT'); assert.equal(fitKind('2" SAE thread'), 'thread'); });
