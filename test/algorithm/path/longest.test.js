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
}([
  'sinon',
  '../../../src/lib/util',
  '../../../src/model/grid',
  '../../../src/algorithm/maze/binaryTree',
  '../../../src/algorithm/path/longest',
  '../../../src/view/ascii/grid'
], function (sinon, _, Grid, binaryTree, longest, GridView) {
  describe('algorithm/path/longest', function () {
    beforeEach(function () {
      this.sinon = sinon.createSandbox();
    });

    afterEach(function () {
      this.sinon.restore();
    });

    it('mark the end points of the longest path in the maze', function () {
      this.sinon.stub(_, 'random').returnsArg(0); // To make the algorithm predictable for testing
      const grid = new Grid(2, 2);
      binaryTree(grid);
      const path = longest(grid);
      path.start.should.equal(grid.cell(0, 0));
      path.end.should.equal(grid.cell(1, 0));
    });
  });
}));
