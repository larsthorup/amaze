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
}(['lodash', 'vsvg'], function (_, vsvg) {

  function SvgGridView (options) {
    this._pixelsPerCell = options.pixelsPerCell || 20;
    this._grid = options.model;
    this._svg = vsvg.svg({
      xmlns: 'http://www.w3.org/2000/svg',
      width: this._pixelsPerCell * this._grid.columns() + 1,
      height: this._pixelsPerCell * this._grid.rows() + 1
    });
  }

  SvgGridView.prototype.svg = function () {
    return this._svg;
  };

  SvgGridView.prototype.render = function () {
    this._grid.eachCell(function (cell) {
      var x1 = cell.column() * this._pixelsPerCell;
      var y1 = cell.row() * this._pixelsPerCell;
      var x2 = (cell.column() + 1) * this._pixelsPerCell;
      var y2 = (cell.row() + 1) * this._pixelsPerCell;
      if (!cell.north()) this.drawLine(x1, y1, x2, y1);
      if (!cell.west()) this.drawLine(x1, y1, x1, y2);
      if (!cell.isLinked(cell.east())) this.drawLine(x2, y1, x2, y2);
      if (!cell.isLinked(cell.south())) this.drawLine(x1, y2, x2, y2);
      if (cell.mark()) {
        var cx = (cell.column() + 0.5) * this._pixelsPerCell;
        var cy = (cell.row() + 0.5) * this._pixelsPerCell;
        var r = 0.3 * this._pixelsPerCell;
        this.drawDot(cx, cy, r);
      }
    }.bind(this));
  };

  SvgGridView.prototype.drawLine = function (x1, y1, x2, y2) {
    this._svg.appendChild(vsvg.line({
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      style: {
        stroke: 'black'
      }
    }));
  };

  SvgGridView.prototype.drawDot = function (cx, cy, r) {
    this._svg.appendChild(vsvg.circle({
      cx: cx,
      cy: cy,
      r: r,
      style: {
        stroke: 'black',
        fill: 'black'
      }
    }));
  };

  SvgGridView.prototype.source = function () {
    return this._svg.outerHTML;
  };

  return SvgGridView;

}));
