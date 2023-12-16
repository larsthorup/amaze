/* eslint-env mocha */
import sinon from 'sinon';
import _ from '../../../src/lib/util.js';
import { Grid } from '../../../src/model/grid.js';
import { recursiveBacktracker } from '../../../src/algorithm/maze/recursiveBacktracker.js';

describe('algorithm/maze/recursiveBacktracker', function () {
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
    recursiveBacktracker(grid);
    // console.log(new GridView({model: grid}).render());
    grid.cell(0, 0).isLinked(grid.cell(0, 1)).should.equal(true);
    grid.cell(0, 1).isLinked(grid.cell(1, 1)).should.equal(true);
    grid.cell(1, 1).isLinked(grid.cell(1, 0)).should.equal(false);
    grid.cell(1, 0).isLinked(grid.cell(0, 0)).should.equal(true);
  });
});
