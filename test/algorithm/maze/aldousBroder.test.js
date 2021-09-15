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
  '../../../src/algorithm/maze/aldousBroder',
  '../../../src/view/ascii/grid'
], function (sinon, _, Grid, aldousBroder, GridView) {
  describe('algorithm/maze/aldousBroder', function () {
    beforeEach(function () {
      this.sinon = sinon.createSandbox();
    });

    afterEach(function () {
      this.sinon.restore();
    });

    it('should create a maze', function () {
      // Node: make the algorithm predictable for testing
      this.sinon.stub(_, 'random').returnsArg(0);
      let index = 999;
      this.sinon.stub(_, 'sample').callsFake(function (array) {
        ++index;
        if (index >= array.length) index = 0;
        return array[index];
      });

      const grid = new Grid(2, 2);
      aldousBroder(grid);
      // console.log(new GridView({model: grid}).render());
      grid.cell(0, 0).isLinked(grid.cell(0, 1)).should.equal(true);
      grid.cell(0, 1).isLinked(grid.cell(1, 1)).should.equal(true);
      grid.cell(1, 1).isLinked(grid.cell(1, 0)).should.equal(false);
      grid.cell(1, 0).isLinked(grid.cell(0, 0)).should.equal(true);
    });
  });
}));
