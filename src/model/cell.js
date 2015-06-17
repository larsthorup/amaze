//ToDo: work with amd
//if(define && define.amd) {
//  define(function (require) { ... })
//}

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

// ToDo: work with Node
module.exports = Cell;