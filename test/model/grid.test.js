/* eslint-env mocha */
import { expect } from '@esm-bundle/chai';
import { Grid } from '../../src/model/grid.js';

describe('model/grid', function () {
  describe('constructor', function () {
    it('should create different cells and connect them', function () {
      const grid = new Grid(2, 2);
      expect(grid.size()).to.equal(4);
      expect(grid.cell(0, 0)).to.not.equal(grid.cell(1, 0));
      expect(grid.cell(0, 0)).to.not.equal(grid.cell(0, 1));
      expect(grid.cell(0, 0)).to.not.equal(grid.cell(1, 1));
      expect(grid.cell(0, 0).south()).to.equal(grid.cell(1, 0));
      expect(grid.cell(1, 0).east()).to.equal(grid.cell(1, 1));
      expect(grid.cell(1, 1).north()).to.equal(grid.cell(0, 1));
      expect(grid.cell(0, 1).west()).to.equal(grid.cell(0, 0));
    });
  });
});
