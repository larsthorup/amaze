import { Maze } from '../model/maze.mjs';
import { AsciiGridView } from '../view/ascii/grid.mjs';

const views = {
  ascii: AsciiGridView
  // svg: SvgGridView
};

export function main (options) {
  const maze = new Maze(options);
  const View = views[options.view];
  const view = new View({ model: maze.grid() });
  view.render();
  console.log(view.source());
}
