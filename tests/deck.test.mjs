import test from 'node:test';
import assert from 'node:assert/strict';
import { nextCardIndex, swipeStep } from '../lib/deck.ts';

test('next/previous navigate one card', () => {
  assert.equal(nextCardIndex(1, 1, 4), 2);
  assert.equal(nextCardIndex(2, -1, 4), 1);
});
test('last card wraps to first and first wraps to last', () => {
  assert.equal(nextCardIndex(3, 1, 4), 0);
  assert.equal(nextCardIndex(0, -1, 4), 3);
});
test('repeated steps remain in range', () => {
  let active = 0;
  for (let i = 0; i < 101; i++) active = nextCardIndex(active, 1, 4);
  assert.equal(active, 1);
  assert.equal(nextCardIndex(0, -9, 4), 3);
});
test('one-card decks remain stable', () => assert.equal(nextCardIndex(0, 1, 1), 0));
test('empty decks are rejected explicitly', () => assert.throws(() => nextCardIndex(0, 1, 0), RangeError));
test('left/right drags select next/previous', () => {
  assert.equal(swipeStep(-80, 0), 1);
  assert.equal(swipeStep(80, 0), -1);
});
test('small drags and clicks snap back', () => {
  assert.equal(swipeStep(0, 0), 0);
  assert.equal(swipeStep(30, 120), 0);
  assert.equal(swipeStep(-55, -400), 0);
});
test('fast flicks use release velocity when drag distance is small', () => {
  assert.equal(swipeStep(4, -500), 1);
  assert.equal(swipeStep(-4, 500), -1);
});
test('decisive drag distance wins over opposite release velocity', () => {
  assert.equal(swipeStep(-100, 500), 1);
  assert.equal(swipeStep(100, -500), -1);
});
