/* eslint-env amd */
(function (depNames, factory) {
  if (typeof define === 'function' && define.amd) {
    define(depNames, factory);
  } else if (typeof exports === 'object') {
    var deps = [];
    for (var i = 0; i < depNames.length; ++i) {
      deps.push(require(depNames[i]));
    }
    module.exports = factory.apply(this, deps);
  }
}(['lodash'], function (_) {
  function Cell (row, column) {
    this._row = row;
    this._column = column;
    this._links = {};
    this._marked = false;
  }

  Cell.prototype.row = function () {
    return this._row;
  };

  Cell.prototype.column = function () {
    return this._column;
  };

  Cell.prototype.north = function (cell) {
    if (cell) {
      this._north = cell;
    } else {
      return this._north;
    }
  };

  Cell.prototype.south = function (cell) {
    if (cell) {
      this._south = cell;
    } else {
      return this._south;
    }
  };

  Cell.prototype.east = function (cell) {
    if (cell) {
      this._east = cell;
    } else {
      return this._east;
    }
  };

  Cell.prototype.west = function (cell) {
    if (cell) {
      this._west = cell;
    } else {
      return this._west;
    }
  };

  Cell.prototype.link = function (cell) {
    this.linkTo(cell);
    cell.linkTo(this);
  };

  Cell.prototype.id = function () {
    return `${this._row}x${this._column}`;
  };

  Cell.prototype.linkTo = function (cell) {
    this._links[cell.id()] = cell;
  };

  Cell.prototype.unlink = function (cell) {
    this.unlinkFrom(cell);
    cell.unlinkFrom(this);
  };

  Cell.prototype.unlinkFrom = function (cell) {
    delete this._links[cell.id()];
  };

  Cell.prototype.isLinked = function (cell) {
    if (!cell) return false;
    return !!this._links[cell.id()];
  };

  Cell.prototype.links = function () {
    return _.values(this._links);
  };

  Cell.prototype.neighbors = function () {
    return _.compact([this._north, this._south, this._east, this._west]);
  };

  Cell.prototype.mark = function (marked) {
    if (_.isUndefined(marked)) {
      return this._marked;
    } else {
      this._marked = true;
    }
  };

  return Cell;
}));
