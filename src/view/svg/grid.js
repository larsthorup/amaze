/** @typedef {import('../../model/grid.js').Grid} Grid */

/** @typedef {{model: Grid; pixelsPerCell?: number}} SvgGridOptions */

/**
 * @param {SvgGridOptions} options
 */
export function SvgGridView (options) {
  this._pixelsPerCell = options.pixelsPerCell || 20;
  this._grid = options.model;
  /** @type {{width: number, height: number, children: string[]}} */
  this._svg = {
    width: this._pixelsPerCell * this._grid.columns() + 1,
    height: this._pixelsPerCell * this._grid.rows() + 1,
    children: []
  };
}

SvgGridView.prototype.svg = function () {
  return this._svg;
};

SvgGridView.prototype.render = function () {
  this._grid.eachCell(cell => {
    const x1 = cell.column() * this._pixelsPerCell;
    const y1 = cell.row() * this._pixelsPerCell;
    const x2 = (cell.column() + 1) * this._pixelsPerCell;
    const y2 = (cell.row() + 1) * this._pixelsPerCell;
    if (!cell.north()) this.drawLine(x1, y1, x2, y1);
    if (!cell.west()) this.drawLine(x1, y1, x1, y2);
    if (!cell.isLinked(cell.east())) this.drawLine(x2, y1, x2, y2);
    if (!cell.isLinked(cell.south())) this.drawLine(x1, y2, x2, y2);
    if (cell.mark()) {
      const cx = (cell.column() + 0.5) * this._pixelsPerCell;
      const cy = (cell.row() + 0.5) * this._pixelsPerCell;
      const r = 0.3 * this._pixelsPerCell;
      this.drawDot(cx, cy, r);
    }
  });
};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 */
SvgGridView.prototype.drawLine = function (x1, y1, x2, y2) {
  this._svg.children.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke: black" />`);
};

/**
 * @param {number} cx
 * @param {number} cy
 * @param {number} r
 */
SvgGridView.prototype.drawDot = function (cx, cy, r) {
  this._svg.children.push(`<circle cx="${cx}" cy="${cy}" r="${r}" style="stroke: black; fill: black" />`);
};

SvgGridView.prototype.source = function () {
  return `<svg width=${this._svg.width} height=${this._svg.height}>${this._svg.children.join('')}</svg>`;
};
