/* eslint-env amd, mocha */
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
}(['../../src/model/grid'], function (Grid) {
  describe('model/grid', function () {
    describe('constructor', function () {
      it('should create different cells and connect them', function () {
        var grid = new Grid(2, 2);
        grid.size().should.equal(4);
        grid.cell(0, 0).should.not.equal(grid.cell(1, 0));
        grid.cell(0, 0).should.not.equal(grid.cell(0, 1));
        grid.cell(0, 0).should.not.equal(grid.cell(1, 1));
        grid.cell(0, 0).south().should.equal(grid.cell(1, 0));
        grid.cell(1, 0).east().should.equal(grid.cell(1, 1));
        grid.cell(1, 1).north().should.equal(grid.cell(0, 1));
        grid.cell(0, 1).west().should.equal(grid.cell(0, 0));
      });
    });
  });
}));

