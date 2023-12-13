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
    });
  });
}));
