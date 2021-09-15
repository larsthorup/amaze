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
}([
  'lodash',
  '../../model/distances'
], function (_, Distances) {
  function expand (distances, frontier) {
    const newFrontier = [];
    _.each(frontier, cell => {
      _.each(cell.links(), linked => {
        if (!_.isNumber(distances.distance(linked))) {
          distances.distance(linked, distances.distance(cell) + 1);
          newFrontier.push(linked);
        }
      });
    });
    return newFrontier;
  }

  function dijkstra (cell) {
    const distances = new Distances(cell);
    let frontier = [cell];
    while (_.some(frontier)) {
      frontier = expand(distances, frontier);
    }
    return distances;
  }

  return dijkstra;
}));
