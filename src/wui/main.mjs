import $ from '../browser/bling.mjs';
import { SvgGridView } from '../view/svg/grid.mjs';
import { Maze } from '../model/maze.mjs';

function main (options) {
  const maze = new Maze(options);
  const view = new SvgGridView({
    model: maze.grid()
  });
  view.render();
  $('#wui')[0].innerHTML = view.source();
}

export default { main };
