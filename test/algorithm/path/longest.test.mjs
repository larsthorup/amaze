/* eslint-env mocha */
import sinon from 'sinon';
import _ from '../../../src/lib/util.mjs';
import { Grid } from '../../../src/model/grid.mjs';
import { binaryTree } from '../../../src/algorithm/maze/binaryTree.mjs';
import { longest } from '../../../src/algorithm/path/longest.mjs';

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
