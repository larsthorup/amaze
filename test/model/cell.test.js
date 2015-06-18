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
}(['../../src/model/cell'], function (Cell) {

    describe('model/cell', function () {

        describe('constructor', function () {

            it('should set row and column', function () {
                var cell = new Cell(2, 5);
                cell.row().should.equal(2);
                cell.column().should.equal(5);
            });

        });

        describe('link', function () {

            it('should add links two way', function () {
                var cell1 = new Cell(1,1);
                var cell2 = new Cell(2,2);
                cell1.link(cell2);
                cell1.isLinked(cell2).should.equal(true);
                cell2.isLinked(cell1).should.equal(true);
            });

        });

        describe('unlink', function () {

            it('should remove links two way', function () {
                var cell1 = new Cell(1,1);
                var cell2 = new Cell(2,2);
                cell1.link(cell2);
                cell1.unlink(cell2);
                cell1.isLinked(cell2).should.equal(false);
                cell2.isLinked(cell1).should.equal(false);

            });

        });

    });

}));

