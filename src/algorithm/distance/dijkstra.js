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
  '../../model/distances'
], function (_, Distances) {

  function expand (distances, frontier) {
    var newFrontier = [];
    _.each(frontier, function (cell) {
      _.each(cell.links(), function (linked) {
        if (!_.isNumber(distances.distance(linked))) {
          distances.distance(linked, distances.distance(cell) + 1);
          newFrontier.push(linked);
        }
      });
    });
    return newFrontier;
  }

  function dijkstra (cell) {
    var distances = new Distances(cell);
    var frontier = [cell];
    while (_.any(frontier)) {
      frontier = expand(distances, frontier);
    }
    return distances;
  }

  return dijkstra;

}));
