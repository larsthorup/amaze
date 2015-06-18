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
                var cell3 = new Cell(3,3);
                cell1.link(cell2);
                cell1.link(cell3);
                cell1.isLinked(cell2).should.equal(true);
                cell2.isLinked(cell1).should.equal(true);
                cell1.isLinked(cell3).should.equal(true);
                cell2.isLinked(cell3).should.equal(false);
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

        describe('neighbors', function () {

            it('should return all neighbors', function () {
                var cell = new Cell(1,1);
                var cellNorth = new Cell(2,2);
                var cellSouth = new Cell(3,3);
                var cellEast = new Cell(4,4);
                var cellWest = new Cell(5,5);
                cell.north(cellNorth);
                cell.south(cellSouth);
                cell.east(cellEast);
                cell.west(cellWest);
                var neighbors = cell.neighbors();
                neighbors.length.should.equal(4);
                neighbors.should.include.members([cellNorth, cellSouth, cellEast, cellWest]);
            });

        });

    });

}));

