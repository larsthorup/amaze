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
}(['lodash'], function (_) {
  function binaryTree (grid) {
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

  return binaryTree;
}));
