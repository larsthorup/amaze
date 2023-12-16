function inRange (value, limit) {
  return value >= 0 && value < limit;
}
function random (limit) {
  return Math.floor(Math.random() * limit);
}
function range (length) {
  return [...Array(length).keys()];
}
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
