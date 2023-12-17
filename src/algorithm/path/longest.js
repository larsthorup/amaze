import { dijkstra } from '../distance/dijkstra.js';

/** @typedef {import('../../model/grid.js').Grid} Grid */

/**
 * @param {Grid} grid
 */
export function longest (grid) {
  const sample = grid.sample();
  let distances = dijkstra(sample);
  const start = distances.max().cell;
  distances = dijkstra(start);
  const end = distances.max().cell;
  const path = { start, end };
  return path;
}
