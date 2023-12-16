import { dijkstra } from '../distance/dijkstra.js';

export function longest (grid) {
  const sample = grid.sample();
  let distances = dijkstra(sample);
  const path = {
    start: distances.max().cell
  };
  distances = dijkstra(path.start);
  path.end = distances.max().cell;
  return path;
}
