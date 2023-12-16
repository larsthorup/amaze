/* eslint-env amd, mocha */
import { Grid } from '../../../src/model/grid.js';
import { AsciiGridView } from '../../../src/view/ascii/grid.js';

describe('view/ascii/grid', function () {
  it('should produce a readable ascii representation of the grid', function () {
    const grid = new Grid(2, 2);
    grid.cell(0, 0).link(grid.cell(1, 0));
    grid.cell(1, 0).link(grid.cell(1, 1));
    grid.cell(0, 0).isLinked(grid.cell(1, 1)).should.equal(false);
    grid.cell(0, 0).mark(true);
    grid.cell(1, 1).mark(true);
    const view = new AsciiGridView({ model: grid });
    view.render();
    const ascii = view.source();
    ascii.should.equal([
      '+---+---+',
      '| x |   |',
      '+   +---+',
      '|     x |',
      '+---+---+',
      ''
    ].join('\n'));
  });
});
