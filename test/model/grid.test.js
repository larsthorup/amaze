/* eslint-env mocha */
import { Grid } from '../../src/model/grid.js';

describe('model/grid', function () {
  describe('constructor', function () {
    it('should create different cells and connect them', function () {
      const grid = new Grid(2, 2);
      grid.size().should.equal(4);
      grid.cell(0, 0).should.not.equal(grid.cell(1, 0));
      grid.cell(0, 0).should.not.equal(grid.cell(0, 1));
      grid.cell(0, 0).should.not.equal(grid.cell(1, 1));
      grid.cell(0, 0).south().should.equal(grid.cell(1, 0));
      grid.cell(1, 0).east().should.equal(grid.cell(1, 1));
      grid.cell(1, 1).north().should.equal(grid.cell(0, 1));
      grid.cell(0, 1).west().should.equal(grid.cell(0, 0));
    });
  });
});
