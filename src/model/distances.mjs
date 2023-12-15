export function Distances (root) {
  this._root = root;
  this._cells = {};
  this.distance(root, 0);
}

Distances.prototype.distance = function (cell, distance) {
  if (distance === undefined) {
    return cell.id() in this._cells ? this._cells[cell.id()].distance : null;
  } else {
    this._cells[cell.id()] = { cell, distance };
  }
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
