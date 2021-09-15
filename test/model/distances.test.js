/* eslint-env amd, mocha */
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
}(['../../src/model/cell', '../../src/model/distances'], function (Cell, Distances) {
  describe('model/distances', function () {
    describe('constructor', function () {
      it('should set the distance of root to zero', function () {
        const root = new Cell(1, 1);
        const distances = new Distances(root);
        distances.distance(root).should.equal(0);
      });
    });

    describe('max', function () {
      it('should return the cell with the maximum distance', function () {
        const root = new Cell(0, 0);
        const distances = new Distances(root);
        const cell1 = new Cell(1, 1);
        distances.distance(cell1, 1);
        const cell2 = new Cell(2, 2);
        distances.distance(cell2, 2);
        distances.max().cell.should.equal(cell2);
      });
    });
  });
}));
