import { Distances } from '../../model/distances.mjs';

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

export function dijkstra (cell) {
  const distances = new Distances(cell);
  let frontier = [cell];
  while (frontier.some(cell => Boolean(cell))) {
    frontier = expand(distances, frontier);
  }
  return distances;
}
