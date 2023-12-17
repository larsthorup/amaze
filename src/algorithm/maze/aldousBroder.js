import _ from '../../lib/util.js';

/** @typedef {import('../../model/grid.js').Grid} Grid */

/**
 * @param {Grid} grid
 */
export function aldousBroder (grid) {
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
