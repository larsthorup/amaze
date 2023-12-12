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
  '../../model/distances'
], function (Distances) {
  function expand (distances, frontier) {
    const newFrontier = [];
    frontier.forEach(cell => {
      cell.links().forEach(linked => {
        if (typeof distances.distance(linked) !== 'number') {
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
    while (frontier.some(cell => Boolean(cell))) {
      frontier = expand(distances, frontier);
    }
    return distances;
  }

  return dijkstra;
}));
