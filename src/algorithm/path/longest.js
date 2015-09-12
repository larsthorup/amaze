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
}([
  'lodash',
  '../distance/dijkstra'
], function (_, dijkstra) {
  function longest (grid) {
    var sample = grid.sample();
    var distances = dijkstra(sample);
    var path = {
      start: distances.max().cell
    };
    distances = dijkstra(path.start);
    path.end = distances.max().cell;
    return path;
  }

  return longest;
}));
