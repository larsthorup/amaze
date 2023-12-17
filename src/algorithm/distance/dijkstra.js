import { Distances } from '../../model/distances.js';

/** @typedef {import('../../model/cell.js').Cell} Cell */

/**
 * @param {Distances} distances
 * @param {Cell[]} frontier
 */
function expand (distances, frontier) {
  /** @type {Cell[]} */
  const newFrontier = [];
  frontier.forEach(cell => {
    cell.links().forEach(linked => {
      if (typeof distances.distance(linked) !== 'number') {
        const cellDistance = distances.distance(cell);
        if (cellDistance === null) throw new Error('Unexpected null distance');
        distances.setDistance(linked, cellDistance + 1);
        newFrontier.push(linked);
      }
    });
  });
  return newFrontier;
}

/**
 * @param {Cell} cell
 */
export function dijkstra (cell) {
  const distances = new Distances(cell);
  let frontier = [cell];
  while (frontier.some(cell => Boolean(cell))) {
    frontier = expand(distances, frontier);
  }
  return distances;
}
