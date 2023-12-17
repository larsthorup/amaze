import _ from '../../lib/util.js';

/** @typedef {import('../../model/cell.js').Cell} Cell */
/** @typedef {import('../../model/grid.js').Grid} Grid */

/**
 * @param {Grid} grid
 */
export function sideWinder (grid) {
  grid.eachRow(function (row) {
    /** @type {Cell[]} */
    const run = [];
    row.forEach(cell => {
      run.push(cell);
      const atEasternBoundary = !cell.east();
      const atNorthernBoundary = !cell.north();
      const shouldCloseOut = atEasternBoundary || (!atNorthernBoundary && _.random(2) === 0);
      if (shouldCloseOut) {
        const member = _.sample(run);
        const northCell = member.north();
        if (northCell) member.link(northCell);
        run.splice(0);
      } else {
        const eastCell = cell.east();
        if (eastCell) cell.link(eastCell);
      }
    });
  });
}
