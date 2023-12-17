/**
 * @param {unknown} condition
 * @returns {asserts condition}
 */
export function assert (condition) {
  if (!condition) throw Error('Assertion failed');
}
