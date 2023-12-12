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
}(['../../lib/util'], function (_) {
  function hasNoLinks (cell) {
    return cell.links().length === 0;
  }

  function backtrack (grid, cell) {
    do {
      const neighbors = cell.neighbors().filter(hasNoLinks);
      if (neighbors.some((cell) => Boolean(cell))) {
        const neighbor = _.sample(neighbors);
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
