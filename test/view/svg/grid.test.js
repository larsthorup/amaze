/* eslint-env mocha */
import { expect } from '@esm-bundle/chai';
import { Grid } from '../../../src/model/grid.js';
import { SvgGridView } from '../../../src/view/svg/grid.js';

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
    expect(svg.width).to.equal(21); // 2 * 10 + 1
    expect(svg.height).to.equal(21); // 2 * 10 + 1
    expect(svg.children.length).to.equal(12); // 12 (lines for a full 2x2 matrix) - 2 (links) + 2 (dots)
    expect(view.source()).to.equal('<svg width=21 height=21><line x1="0" y1="0" x2="10" y2="0" style="stroke: black" /><line x1="0" y1="0" x2="0" y2="10" style="stroke: black" /><line x1="10" y1="0" x2="10" y2="10" style="stroke: black" /><circle cx="5" cy="5" r="3" style="stroke: black; fill: black" /><line x1="10" y1="0" x2="20" y2="0" style="stroke: black" /><line x1="20" y1="0" x2="20" y2="10" style="stroke: black" /><line x1="10" y1="10" x2="20" y2="10" style="stroke: black" /><line x1="0" y1="10" x2="0" y2="20" style="stroke: black" /><line x1="0" y1="20" x2="10" y2="20" style="stroke: black" /><line x1="20" y1="10" x2="20" y2="20" style="stroke: black" /><line x1="10" y1="20" x2="20" y2="20" style="stroke: black" /><circle cx="15" cy="15" r="3" style="stroke: black; fill: black" /></svg>');
  });
});
