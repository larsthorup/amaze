/* eslint-env mocha */
import _ from '../../src/lib/util.js';

describe('lib/util', function () {
  describe('inRange', function () {
    it('should return true if value is in range', function () {
      _.inRange(0, 10).should.equal(true);
    });
    it('should return false if value is not in range', function () {
      _.inRange(10, 10).should.equal(false);
    });
  });

  describe('range', function () {
    it('should return an array of numbers', function () {
      _.range(3).should.deep.equal([0, 1, 2]);
    });
  });

  describe('sample', function () {
    it('should return a random element from an array', function () {
      const array = [1, 2, 3];
      _.sample(array).should.be.oneOf(array);
    });
  });

  describe('random', function () {
    it('return a random number in the range [0, limit)', function () {
      _.random(10).should.be.within(0, 9);
    });
  });
});
