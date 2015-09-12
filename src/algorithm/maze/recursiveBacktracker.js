/* eslint-env amd */
(function (depNames, factory) {
  if (typeof define === 'function' && define.amd) {
    define(depNames, factory);
  } else if (typeof exports === 'object') {
    var deps = [];
    for (var i = 0; i < depNames.length; ++i) {
      deps.push(require(depNames[i]));
    }
    module.exports = factory.apply(this, deps);
  }
}(['lodash'], function (_) {
  function hasNoLinks (cell) {
    return _.isEmpty(cell.links());
  }

  function backtrack (grid, cell) {
    do {
      var neighbors = _.filter(cell.neighbors(), hasNoLinks);
      if (_.some(neighbors)) {
        var neighbor = _.sample(neighbors);
        cell.link(neighbor);
        backtrack(grid, neighbor);
      } else {
        return;
      }
    } while (true);
  }

  function recursiveBacktracker (grid) {
    backtrack(grid, grid.sample());
  }

  return recursiveBacktracker;
}));
