import _ from '../../lib/util.js';

/** @typedef {import('../../model/cell.js').Cell} Cell */
/** @typedef {import('../../model/grid.js').Grid} Grid */

/**
 * @param {Cell} cell
 */
function hasNoLinks (cell) {
  return cell.links().length === 0;
}

/**
 * @param {Grid} grid
 * @param {Cell} cell
 */
function backtrack (grid, cell) {
  do {
    const neighbors = cell.neighbors().filter(hasNoLinks);
    if (neighbors.some((cell) => Boolean(cell))) {
      const neighbor = _.sample(neighbors);
      cell.link(neighbor);
      backtrack(grid, neighbor);
    } else {
      return;
    }
  } while (true);
}

/**
 * @param {Grid} grid
 */
export function recursiveBacktracker (grid) {
  backtrack(grid, grid.sample());
}
