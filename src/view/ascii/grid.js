/* eslint-env amd */
(function (depNames, factory) {
  if (typeof define === 'function' && define.amd) {
    define(depNames, factory);
  } else if (typeof exports === 'object') {
    var deps = [];
    for (var i = 0; i < depNames.length; ++i) {
      deps.push(require(depNames[i]));
    }
    module.exports = factory.apply(this, deps);
  }
}(['lodash'], function (_) {
  function AsciiGridView (options) {
    this._grid = options.model;
  }

  AsciiGridView.prototype.render = function () {
    var columnTops = _.repeat('---+', this._grid.columns());
    this._source = `+${columnTops}\n`;
    this._grid.eachRow(row => {
      var top = '|';
      var bottom = '+';
      _.each(row, cell => {
        var cellChar = cell.mark() ? 'x' : ' ';
        var eastBoundary = cell.isLinked(cell.east()) ? ' ' : '|';
        var southBoundary = cell.isLinked(cell.south()) ? '   ' : '---';
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
