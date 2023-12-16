import { Maze } from '../model/maze.js';
import { AsciiGridView } from '../view/ascii/grid.js';
import { SvgGridView } from '../view/svg/grid.js';

const views = {
  ascii: AsciiGridView,
  svg: SvgGridView
};

function main (options) {
  const maze = new Maze(options);
  const View = views[options.view];
  const view = new View({ model: maze.grid() });
  view.render();
  console.log(view.source());
}

export default { main };
