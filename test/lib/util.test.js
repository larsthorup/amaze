/* eslint-env mocha */
import { expect } from '@esm-bundle/chai';
import _ from '../../src/lib/util.js';

describe('lib/util', function () {
  describe('inRange', function () {
    it('should return true if value is in range', function () {
      expect(_.inRange(0, 10)).to.equal(true);
    });
    it('should return false if value is not in range', function () {
      expect(_.inRange(10, 10)).to.equal(false);
    });
  });

  describe('range', function () {
    it('should return an array of numbers', function () {
      expect(_.range(3)).to.deep.equal([0, 1, 2]);
    });
  });

  describe('sample', function () {
    it('should return a random element from an array', function () {
      const array = [1, 2, 3];
      expect(_.sample(array)).to.be.oneOf(array);
    });
  });

  describe('random', function () {
    it('return a random number in the range [0, limit)', function () {
      expect(_.random(10)).to.be.within(0, 9);
    });
  });
});
