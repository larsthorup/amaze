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

  function aldousBroder (grid) {
    var cell = grid.sample();
    var unvisited = grid.size() - 1;
    while (unvisited > 0) {
      var neighbor = _.sample(cell.neighbors());
      if (_.isEmpty(neighbor.links())) {
        cell.link(neighbor);
        --unvisited;
      }
      cell = neighbor;
    }
  }

  return aldousBroder;

}));
