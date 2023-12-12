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
}([], function () {
  function AsciiGridView (options) {
    this._grid = options.model;
  }

  AsciiGridView.prototype.render = function () {
    const columnTops = '---+'.repeat(this._grid.columns());
    this._source = `+${columnTops}\n`;
    this._grid.eachRow(row => {
      let top = '|';
      let bottom = '+';
      row.forEach(cell => {
        const cellChar = cell.mark() ? 'x' : ' ';
        const eastBoundary = cell.isLinked(cell.east()) ? ' ' : '|';
        const southBoundary = cell.isLinked(cell.south()) ? '   ' : '---';
        top += ` ${cellChar} ${eastBoundary}`;
        bottom += `${southBoundary}+`;
      });
      this._source += top + '\n';
      this._source += bottom + '\n';
    });
  };

  AsciiGridView.prototype.source = function () {
    return this._source;
  };

  return AsciiGridView;
}));
