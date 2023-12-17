import _ from '../../lib/util.js';

/** @typedef {import('../../model/grid.js').Grid} Grid */

/**
 * @param {Grid} grid
 */
export function binaryTree (grid) {
  grid.eachCell(cell => {
    const neighbors = [];
    if (cell.north()) neighbors.push(cell.north());
    if (cell.east()) neighbors.push(cell.east());
    if (neighbors.length > 0) {
      const index = _.random(neighbors.length - 1);
      const neighbor = neighbors[index];
      // console.log(neighbors.length, index, neighbor);
      if (neighbor) cell.link(neighbor);
    }
  });
}
