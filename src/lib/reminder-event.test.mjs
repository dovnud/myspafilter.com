import assert from 'node:assert/strict';
import test from 'node:test';
import { reminderEvent } from './reminder-event.mjs';

test('reminder_signup carries the part id and nothing else', () => {
  const event = reminderEvent('hot-spring/c-6430');
  assert.deepEqual(event, { name: 'reminder_signup', params: { part_id: 'hot-spring/c-6430' } });
  assert.equal(Object.keys(event.params).join(','), 'part_id');
  assert.equal(reminderEvent('owner@example.com'), null);
  assert.equal(reminderEvent('hot-spring/c-6430?email=owner@example.com'), null);
  assert.equal(reminderEvent(''), null);
  assert.equal(reminderEvent('has space'), null);
});
