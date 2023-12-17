import _ from '../lib/util.js';
import { Cell } from './cell.js';

/**
 * @param {number} rows
 * @param {number} columns
 */
export function Grid (rows, columns) {
  this._rows = rows;
  this._columns = columns;
  this._cells = this.createCells();
  this.placeCells();
}

Grid.prototype.columns = function () {
  return this._columns;
};

Grid.prototype.rows = function () {
  return this._rows;
};

Grid.prototype.createCells = function () {
  return _.range(this._rows).map(row => {
    return _.range(this._columns).map(column => {
      return new Cell(row, column);
    });
  });
};

Grid.prototype.placeCells = function () {
  this.eachCell(cell => {
    const row = cell.row();
    const col = cell.column();
    cell.north(this.cellMaybe(row - 1, col));
    cell.south(this.cellMaybe(row + 1, col));
    cell.west(this.cellMaybe(row, col - 1));
    cell.east(this.cellMaybe(row, col + 1));
  });
};

/**
 * @param {number} row
 * @param {number} column
 * @returns
 */
Grid.prototype.cellMaybe = function (row, column) {
  if (!_.inRange(row, this._rows)) return null;
  if (!_.inRange(column, this._columns)) return null;
  return this._cells[row][column];
};

/**
 * @param {number} row
 * @param {number} column
 * @returns
 */
Grid.prototype.cell = function (row, column) {
  const cell = this.cellMaybe(row, column);
  if (!cell) throw new Error('Unexpected null cell');
  return cell;
};

/**
 * @param {(row: Cell[]) => void} next
 */
Grid.prototype.eachRow = function (next) {
  this._cells.forEach(next);
};

/**
 * @param {(cell: Cell) => void} next
 */
Grid.prototype.eachCell = function (next) {
  this.eachRow(row => {
    row.forEach(next);
  });
};

Grid.prototype.size = function () {
  return this._rows * this._columns;
};

Grid.prototype.sample = function () {
  const cell = this.cell(_.random(this._rows - 1), _.random(this._columns - 1));
  return cell;
};
