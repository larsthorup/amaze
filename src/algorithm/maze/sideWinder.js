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
}(['../../lib/util'], function (_) {
  function sideWinder (grid) {
    grid.eachRow(function (row) {
      const run = [];
      row.forEach(cell => {
        run.push(cell);
        const atEasternBoundary = !cell.east();
        const atNorthernBoundary = !cell.north();
        const shouldCloseOut = atEasternBoundary || (!atNorthernBoundary && _.random(2) === 0);
        if (shouldCloseOut) {
          const member = _.sample(run);
          if (member.north()) member.link(member.north());
          run.splice(0);
        } else {
          if (cell.east()) cell.link(cell.east());
        }
      });
    });
  }

  return sideWinder;
}));
