/* eslint-env mocha */
import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';
import _ from '../../../src/lib/util.js';
import { Grid } from '../../../src/model/grid.js';
import { binaryTree } from '../../../src/algorithm/maze/binaryTree.js';
import { longest } from '../../../src/algorithm/path/longest.js';

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
    expect(path.start).to.equal(grid.cell(0, 0));
    expect(path.end).to.equal(grid.cell(1, 0));
  });
});
