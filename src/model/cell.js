/**
 * @param {number} row
 * @param {number} column
 */
export function Cell (row, column) {
  /** @type {number} */
  this._row = row;

  /** @type {number} */
  this._column = column;

  /** @type {{[key: string]: Cell}} */
  this._links = {};

  /** @type {boolean} */
  this._marked = false;
}

Cell.prototype.row = function () {
  return this._row;
};

Cell.prototype.column = function () {
  return this._column;
};

/**
 * @param {Cell | null | undefined} [cell]
 */
Cell.prototype.north = function (cell) {
  if (cell) {
    this._north = cell;
  } else {
    return this._north;
  }
};

/**
 * @param {Cell | null | undefined} [cell]
 */
Cell.prototype.south = function (cell) {
  if (cell) {
    this._south = cell;
  } else {
    return this._south;
  }
};

/**
 * @param {Cell | null | undefined} [cell]
 */
Cell.prototype.east = function (cell) {
  if (cell) {
    this._east = cell;
  } else {
    return this._east;
  }
};

/**
 * @param {Cell | null | undefined} [cell]
 */
Cell.prototype.west = function (cell) {
  if (cell) {
    this._west = cell;
  } else {
    return this._west;
  }
};

/**
 * @param {Cell} cell
 */
Cell.prototype.link = function (cell) {
  this.linkTo(cell);
  cell.linkTo(this);
};

Cell.prototype.id = function () {
  return `${this._row}x${this._column}`;
};

/**
 * @param {Cell} cell
 */
Cell.prototype.linkTo = function (cell) {
  this._links[cell.id()] = cell;
};

/**
 * @param {Cell} cell
 */
Cell.prototype.unlink = function (cell) {
  this.unlinkFrom(cell);
  cell.unlinkFrom(this);
};

/**
 * @param {Cell} cell
 */
Cell.prototype.unlinkFrom = function (cell) {
  delete this._links[cell.id()];
};

/**
 * @param {Cell | undefined} cell
 */
Cell.prototype.isLinked = function (cell) {
  if (!cell) return false;
  return !!this._links[cell.id()];
};

Cell.prototype.links = function () {
  return Object.values(this._links);
};

/**
 * @returns {Cell[]}
 */
Cell.prototype.neighbors = function () {
  /**
   * @param {Cell | undefined} cell
   * @returns {cell is Cell}
   */
  const isCell = (cell) => Boolean(cell);
  return [this._north, this._south, this._east, this._west].filter(isCell);
};

/**
 * @param {boolean | undefined} [marked]
 */
Cell.prototype.mark = function (marked) {
  if (marked === undefined) {
    return this._marked;
  } else {
    this._marked = true;
  }
};
