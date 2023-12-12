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
  function aldousBroder (grid) {
    let cell = grid.sample();
    let unvisited = grid.size() - 1;
    while (unvisited > 0) {
      const neighbor = _.sample(cell.neighbors());
      if (neighbor.links().length === 0) {
        cell.link(neighbor);
        --unvisited;
      }
      cell = neighbor;
    }
  }

  return aldousBroder;
}));
