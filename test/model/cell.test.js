/* eslint-env mocha */

import { Cell } from '../../src/model/cell.js';

describe('model/cell', function () {
  describe('constructor', function () {
    it('should set row and column', function () {
      const cell = new Cell(2, 5);
      cell.row().should.equal(2);
      cell.column().should.equal(5);
    });
  });

  describe('link', function () {
    it('should add links two way', function () {
      const cell1 = new Cell(1, 1);
      const cell2 = new Cell(2, 2);
      const cell3 = new Cell(3, 3);
      cell1.link(cell2);
      cell1.link(cell3);
      cell1.isLinked(cell2).should.equal(true);
      cell2.isLinked(cell1).should.equal(true);
      cell1.isLinked(cell3).should.equal(true);
      cell2.isLinked(cell3).should.equal(false);
      const links = cell1.links();
      links.length.should.equal(2);
      links[0].should.equal(cell2);
      links[1].should.equal(cell3);
    });
  });

  describe('unlink', function () {
    it('should remove links two way', function () {
      const cell1 = new Cell(1, 1);
      const cell2 = new Cell(2, 2);
      cell1.link(cell2);
      cell1.unlink(cell2);
      cell1.isLinked(cell2).should.equal(false);
      cell2.isLinked(cell1).should.equal(false);
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
      neighbors.length.should.equal(4);
      neighbors.should.include.members([cellNorth, cellSouth, cellEast, cellWest]);
    });
  });
});
