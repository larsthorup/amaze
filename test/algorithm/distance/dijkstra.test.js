/* eslint-env mocha */
import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';
import _ from '../../../src/lib/util.js';
import { Grid } from '../../../src/model/grid.js';
import { binaryTree } from '../../../src/algorithm/maze/binaryTree.js';
import { dijkstra } from '../../../src/algorithm/distance/dijkstra.js';

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
    expect(distances.distance(grid.cell(0, 0))).to.equal(0);
    expect(distances.distance(grid.cell(0, 1))).to.equal(1);
    expect(distances.distance(grid.cell(1, 0))).to.equal(3);
    expect(distances.distance(grid.cell(1, 1))).to.equal(2);
  });
});
