/* eslint-env mocha */
import { expect } from '@esm-bundle/chai';
import { Cell } from '../../src/model/cell.js';
import { Distances } from '../../src/model/distances.js';

describe('model/distances', function () {
  describe('constructor', function () {
    it('should set the distance of root to zero', function () {
      const root = new Cell(1, 1);
      const distances = new Distances(root);
      expect(distances.distance(root)).to.equal(0);
    });
  });

  describe('max', function () {
    it('should return the cell with the maximum distance', function () {
      const root = new Cell(0, 0);
      const distances = new Distances(root);
      const cell1 = new Cell(1, 1);
      distances.setDistance(cell1, 1);
      const cell2 = new Cell(2, 2);
      distances.setDistance(cell2, 2);
      expect(distances.max().cell).to.equal(cell2);
    });
  });
});
