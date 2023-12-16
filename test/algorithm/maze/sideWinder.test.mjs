/* eslint-env mocha */
import sinon from 'sinon';
import _ from '../../../src/lib/util.mjs';
import { Grid } from '../../../src/model/grid.mjs';
import { sideWinder } from '../../../src/algorithm/maze/sideWinder.mjs';

describe('algorithm/maze/sideWinder', function () {
  beforeEach(function () {
    this.sinon = sinon.createSandbox();
  });

  afterEach(function () {
    this.sinon.restore();
  });

  it('should create a maze', function () {
    this.sinon.stub(_, 'random').returnsArg(0); // To make the algorithm predictable for testing
    this.sinon.stub(_, 'sample').callsFake(function (array) {
      return array[0];
    });
    const grid = new Grid(2, 2);
    sideWinder(grid);
    // console.log(new GridView({model: grid}).render());
    grid.cell(0, 0).isLinked(grid.cell(0, 1)).should.equal(true);
    grid.cell(0, 1).isLinked(grid.cell(1, 1)).should.equal(false);
    grid.cell(1, 1).isLinked(grid.cell(1, 0)).should.equal(true);
    grid.cell(1, 0).isLinked(grid.cell(0, 0)).should.equal(true);
  });
});
