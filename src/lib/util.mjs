export function inRange (value, limit) {
  return value >= 0 && value < limit;
}
export function random (limit) {
  return Math.floor(Math.random() * limit);
}
export function range (length) {
  return [...Array(length).keys()];
}
export function sample (list) {
  return list[random(list.length)];
}
