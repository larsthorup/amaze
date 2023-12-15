/* eslint-env mocha */
import sinon from 'sinon';
import _ from '../../../src/lib/util.mjs';
import { Grid } from '../../../src/model/grid.mjs';
import { binaryTree } from '../../../src/algorithm/maze/binaryTree.mjs';
import { dijkstra } from '../../../src/algorithm/distance/dijkstra.mjs';

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
