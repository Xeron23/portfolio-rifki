/** Keep card navigation circular, including repeated keyboard/button input. */
export function nextCardIndex(current: number, step: number, count: number): number {
  if (!Number.isInteger(count) || count < 1) throw new RangeError("A deck needs at least one card.");
  return ((current + step) % count + count) % count;
}

/** A decisive drag or quick flick changes exactly one card; tiny drags snap back. */
export function swipeStep(offset: number, velocity: number): -1 | 0 | 1 {
  if (Math.abs(offset) > 55) return offset < 0 ? 1 : -1;
  if (Math.abs(velocity) > 400) return velocity < 0 ? 1 : -1;
  return 0;
}
