import { Maze } from '../model/maze.js';
import { views } from '../view/views.js';

/** @typedef {import('../model/maze.js').MazeOptions} MazeOptions */

/**
 * @param {MazeOptions} options
 */
function main (options) {
  const maze = new Maze(options);
  const View = views[options.view];
  const view = new View({ model: maze.grid() });
  view.render();
  console.log(view.source());
}

export default { main };
