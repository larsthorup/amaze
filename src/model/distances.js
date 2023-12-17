/** @typedef {import('./cell.js').Cell} Cell";

/**
 * @param {Cell} root
 */
export function Distances (root) {
  /** @type {Cell} */
  this._root = root;

  /** @type {{[key: string]: { cell: Cell, distance: number }}} */
  this._cells = {};

  this.setDistance(root, 0);
}

/**
 * @param {Cell} cell
 */
Distances.prototype.distance = function (cell) {
  return cell.id() in this._cells ? this._cells[cell.id()].distance : null;
};

/**
 * @param {Cell} cell
 * @param {number} distance
 */
Distances.prototype.setDistance = function (cell, distance) {
  this._cells[cell.id()] = { cell, distance };
};

Distances.prototype.max = function () {
  let max = {
    cell: this._root,
    distance: 0
  };
  Object.values(this._cells).forEach(value => {
    if (value.distance > max.distance) {
      max = value;
    }
  });
  return max;
};
