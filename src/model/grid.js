(function (depNames, factory) {
    if (typeof define === 'function' && define.amd) {
        define(depNames, factory);
    } else if (typeof exports === 'object') {
        var deps = [];
        for(var i = 0; i < depNames.length; ++i) {
            deps.push(require(depNames[i]));
        }
        module.exports = factory.apply(this, deps);
    }
}(['lodash', './cell'], function (_, Cell) {

    function Grid(rows, columns) {
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
        return _.range(this._rows).map(function (row) {
            return _.range(this._columns).map(function (column) {
                return new Cell(row, column);
            });
        }.bind(this));
    };

    Grid.prototype.placeCells = function () {
        this.eachCell(function (cell) {
            var row = cell.row();
            var col = cell.column();
            cell.north(this.cell(row - 1, col));
            cell.south(this.cell(row + 1, col));
            cell.west(this.cell(row, col - 1));
            cell.east(this.cell(row, col + 1));
        }.bind(this));
    };

    Grid.prototype.cell = function (row, column) {
        if(!_.inRange(row, this._rows)) return null;
        if(!_.inRange(column, this._columns)) return null;
        return this._cells[row][column];
    };

    Grid.prototype.eachRow = function (next) {
        _.each(this._cells, next);
    };

    Grid.prototype.eachCell = function (next) {
        this.eachRow(function (row) {
            _.each(row, next);
        });
    };

    Grid.prototype.size = function () {
        return this._rows * this._columns;
    };

    return Grid;

}));
