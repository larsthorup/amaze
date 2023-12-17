import $ from '../browser/bling.js';
import { SvgGridView } from '../view/svg/grid.js';
import { Maze } from '../model/maze.js';

/** @typedef {import('../model/maze.js').MazeOptions} MazeOptions */

/**
 * @param {MazeOptions} options
 */
function main (options) {
  const maze = new Maze(options);
  const view = new SvgGridView({
    model: maze.grid()
  });
  view.render();
  $('#wui')[0].innerHTML = view.source();
}

export default { main };
