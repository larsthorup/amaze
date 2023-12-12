/* eslint-env amd */
(function (depNames, factory) {
  if (typeof define === 'function' && define.amd) {
    define(depNames, factory);
  } else if (typeof exports === 'object') {
    const deps = [];
    for (let i = 0; i < depNames.length; ++i) {
      deps.push(require(depNames[i]));
    }
    module.exports = factory.apply(this, deps);
  }
}([], function () {
  function inRange (value, limit) {
    return value >= 0 && value < limit;
  }
  function random (limit) {
    return Math.floor(Math.random() * limit);
  }
  function range (length) {
    return [...Array(length).keys()];
  }
  function sample (list) {
    return list[random(list.length)];
  }
  return { inRange, random, range, sample };
}));
