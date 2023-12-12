/* eslint-env amd */
(function (depNames, factory) {
  if (typeof define === 'function' && define.amd) {
    define(depNames, factory);
  } else if (typeof exports === 'object') {
    const deps = [];
    for (let i = 0; i < depNames.length; ++i) {
      deps.push(require(depNames[i]));
    }
    module.exports = factory.apply(this, deps);
  }
}([], function () {
  function Distances (root) {
    this._root = root;
    this._cells = {};
    this.distance(root, 0);
  }

  Distances.prototype.distance = function (cell, distance) {
    if (distance === undefined) {
      return cell.id() in this._cells ? this._cells[cell.id()].distance : null;
    } else {
      this._cells[cell.id()] = {
        cell: cell,
        distance: distance
      };
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

  return Distances;
}));
