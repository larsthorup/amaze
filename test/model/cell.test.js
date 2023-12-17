/* eslint-env mocha */

import { expect } from '@esm-bundle/chai';
import { Cell } from '../../src/model/cell.js';

describe('model/cell', function () {
  describe('constructor', function () {
    it('should set row and column', function () {
      const cell = new Cell(2, 5);
      expect(cell.row()).to.equal(2);
      expect(cell.column()).to.equal(5);
    });
  });

  describe('link', function () {
    it('should add links two way', function () {
      const cell1 = new Cell(1, 1);
      const cell2 = new Cell(2, 2);
      const cell3 = new Cell(3, 3);
      cell1.link(cell2);
      cell1.link(cell3);
      expect(cell1.isLinked(cell2)).to.equal(true);
      expect(cell2.isLinked(cell1)).to.equal(true);
      expect(cell1.isLinked(cell3)).to.equal(true);
      expect(cell2.isLinked(cell3)).to.equal(false);
      const links = cell1.links();
      expect(links.length).to.equal(2);
      expect(links[0]).to.equal(cell2);
      expect(links[1]).to.equal(cell3);
    });
  });

  describe('unlink', function () {
    it('should remove links two way', function () {
      const cell1 = new Cell(1, 1);
      const cell2 = new Cell(2, 2);
      cell1.link(cell2);
      cell1.unlink(cell2);
      expect(cell1.isLinked(cell2)).to.equal(false);
      expect(cell2.isLinked(cell1)).to.equal(false);
    });
  });

  describe('neighbors', function () {
    it('should return all neighbors', function () {
      const cell = new Cell(1, 1);
      const cellNorth = new Cell(2, 2);
      const cellSouth = new Cell(3, 3);
      const cellEast = new Cell(4, 4);
      const cellWest = new Cell(5, 5);
      cell.north(cellNorth);
      cell.south(cellSouth);
      cell.east(cellEast);
      cell.west(cellWest);
      const neighbors = cell.neighbors();
      expect(neighbors.length).to.equal(4);
      expect(neighbors).to.include.members([cellNorth, cellSouth, cellEast, cellWest]);
    });
  });
});
