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
}([], function () {

    function Cell(row, column) {
        this._row = row;
        this._column = column;
        this._links = {};
    }

    Cell.prototype.row = function () {
        return this._row;
    };

    Cell.prototype.column = function () {
        return this._column;
    };

    Cell.prototype.link = function (cell) {
        this.linkTo(cell);
        cell.linkTo(this);
    };

    Cell.prototype.linkTo = function (cell) {
        this._links[cell] = true;
    };

    Cell.prototype.unlink = function (cell) {
        this.unlinkFrom(cell);
        cell.unlinkFrom(this);
    };

    Cell.prototype.unlinkFrom = function (cell) {
        delete this._links[cell];
    };

    Cell.prototype.isLinked = function (cell) {
        return !!this._links[cell];
    };

    return Cell;

}));
