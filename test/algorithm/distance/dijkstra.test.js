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
  'lodash',
  '../../../src/model/grid',
  '../../../src/algorithm/maze/binaryTree',
  '../../../src/algorithm/distance/dijkstra',
  '../../../src/view/ascii/grid'
], function (sinon, _, Grid, binaryTree, dijkstra, GridView) {
  describe('algorithm/distance/dijkstra', function () {
    beforeEach(function () {
      this.sinon = sinon.createSandbox();
    });

    afterEach(function () {
      this.sinon.restore();
    });

    it('should create a maze', function () {
      this.sinon.stub(_, 'random').returnsArg(0); // To make the algorithm predictable for testing
      const grid = new Grid(2, 2);
      binaryTree(grid);
      const distances = dijkstra(grid.cell(0, 0));
      distances.distance(grid.cell(0, 0)).should.equal(0);
      distances.distance(grid.cell(0, 1)).should.equal(1);
      distances.distance(grid.cell(1, 0)).should.equal(3);
      distances.distance(grid.cell(1, 1)).should.equal(2);
    });
  });
}));
