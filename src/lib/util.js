/**
 * @param {number} value
 * @param {number} limit
 */
function inRange (value, limit) {
  return value >= 0 && value < limit;
}

/**
 * @param {number} limit
 */
function random (limit) {
  return Math.floor(Math.random() * limit);
}

/**
 * @param {number} length
 */
function range (length) {
  return [...Array(length).keys()];
}

/**
 * @template T
 * @param {T[]} list
 */
function sample (list) {
  return list[util.random(list.length)];
}

const util = {
  inRange,
  random,
  range,
  sample
};

export default util;
