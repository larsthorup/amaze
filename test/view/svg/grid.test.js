/* eslint-env amd, mocha */
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
}(['../../../src/model/grid', '../../../src/view/svg/grid'], function (Grid, SvgGridView) {
  describe('view/svg/grid', function () {
    it('should produce an svg representation of the grid', function () {
      const grid = new Grid(2, 2);
      grid.cell(0, 0).link(grid.cell(1, 0));
      grid.cell(1, 0).link(grid.cell(1, 1));
      grid.cell(0, 0).mark(true);
      grid.cell(1, 1).mark(true);
      const view = new SvgGridView({ model: grid, pixelsPerCell: 10 });
      view.render();
      const svg = view.svg();
      svg.width.should.equal(21); // 2 * 10 + 1
      svg.height.should.equal(21); // 2 * 10 + 1
      svg.children.length.should.equal(12); // 12 (lines for a full 2x2 matrix) - 2 (links) + 2 (dots)
      view.source().should.equal('<svg width=21 height=21><line x1="0" y1="0" x2="10" y2="0" style="stroke: black" /><line x1="0" y1="0" x2="0" y2="10" style="stroke: black" /><line x1="10" y1="0" x2="10" y2="10" style="stroke: black" /><circle cx="5" cy="5" r="3" style="stroke: black; fill: black" /><line x1="10" y1="0" x2="20" y2="0" style="stroke: black" /><line x1="20" y1="0" x2="20" y2="10" style="stroke: black" /><line x1="10" y1="10" x2="20" y2="10" style="stroke: black" /><line x1="0" y1="10" x2="0" y2="20" style="stroke: black" /><line x1="0" y1="20" x2="10" y2="20" style="stroke: black" /><line x1="20" y1="10" x2="20" y2="20" style="stroke: black" /><line x1="10" y1="20" x2="20" y2="20" style="stroke: black" /><circle cx="15" cy="15" r="3" style="stroke: black; fill: black" /></svg>');
    });
  });
}));
