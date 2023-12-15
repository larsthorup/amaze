import _ from '../lib/util.mjs';
import { Cell } from './cell.mjs';

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
    cell.north(this.cell(row - 1, col));
    cell.south(this.cell(row + 1, col));
    cell.west(this.cell(row, col - 1));
    cell.east(this.cell(row, col + 1));
  });
};

Grid.prototype.cell = function (row, column) {
  if (!_.inRange(row, this._rows)) return null;
  if (!_.inRange(column, this._columns)) return null;
  return this._cells[row][column];
};

Grid.prototype.eachRow = function (next) {
  this._cells.forEach(next);
};

Grid.prototype.eachCell = function (next) {
  this.eachRow(row => {
    row.forEach(next);
  });
};

Grid.prototype.size = function () {
  return this._rows * this._columns;
};

Grid.prototype.sample = function () {
  return this.cell(_.random(this._rows - 1), _.random(this._columns - 1));
};
