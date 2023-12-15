/* eslint-env mocha */
import sinon from 'sinon';
import _ from '../../../src/lib/util.mjs';
import { Grid } from '../../../src/model/grid.mjs';
import { binaryTree } from '../../../src/algorithm/maze/binaryTree.mjs';

describe('algorithm/maze/binaryTree', function () {
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
    // console.log(new GridView({model: grid}).render());
    grid.cell(0, 0).isLinked(grid.cell(0, 1)).should.equal(true);
    grid.cell(0, 1).isLinked(grid.cell(1, 1)).should.equal(true);
    grid.cell(1, 1).isLinked(grid.cell(1, 0)).should.equal(true);
    grid.cell(1, 0).isLinked(grid.cell(0, 0)).should.equal(false);
  });
});
