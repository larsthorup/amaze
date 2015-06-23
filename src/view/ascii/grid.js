/*eslint-env amd */
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

  function View (options) {
    this._grid = options.model;
  }

  View.prototype.render = function () {
    var output = '+' + _.repeat('---+', this._grid.columns()) + '\n';
    var corner = '+';
    this._grid.eachRow(function (row) {
      var top = '|';
      var bottom = '+';
      _.each(row, function (cell) {
        var body = ' ' + (cell.mark() ? 'x' : ' ') + ' ';
        var eastBoundary = cell.isLinked(cell.east()) ? ' ' : '|';
        top += body + eastBoundary;
        var southBoundary = cell.isLinked(cell.south()) ? '   ' : '---';
        bottom += southBoundary + corner;
      });
      output += top + '\n';
      output += bottom + '\n';
    });
    return output;
  };

  return View;

}));
