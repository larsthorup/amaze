import _ from '../../lib/util.js';

function hasNoLinks (cell) {
  return cell.links().length === 0;
}

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

export function recursiveBacktracker (grid) {
  backtrack(grid, grid.sample());
}
