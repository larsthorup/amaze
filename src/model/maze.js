import { Grid } from './grid.js';

import { aldousBroder } from '../algorithm/maze/aldousBroder.js';
import { binaryTree } from '../algorithm/maze/binaryTree.js';
import { recursiveBacktracker } from '../algorithm/maze/recursiveBacktracker.js';
import { sideWinder } from '../algorithm/maze/sideWinder.js';
import { longest } from '../algorithm/path/longest.js';

/** @typedef {import('../view/views.js').ViewType} ViewType */

const algorithms = {
  binaryTree,
  sideWinder,
  aldousBroder,
  recursiveBacktracker
};

/** @typedef {keyof algorithms} Algorithm */
/** @typedef {{rows: number, columns: number, algorithm: Algorithm, view: ViewType}} MazeOptions */

/**
 * @param {string} algorithm
 * @returns {algorithm is Algorithm}
 */
export const isAlgorithm = (algorithm) => Object.keys(algorithms).includes(algorithm);

/**
 * @param {MazeOptions} options
 */
export function Maze (options) {
  /** @type {Grid} */
  this._grid = new Grid(options.rows, options.columns);
  this.carveMaze(options);
  this.markPath();
}

/**
 * @param {MazeOptions} options
 */
Maze.prototype.carveMaze = function (options) {
  algorithms[options.algorithm](this._grid);
};

Maze.prototype.markPath = function () {
  const path = longest(this._grid);
  path.start.mark(true);
  path.end.mark(true);
};

Maze.prototype.grid = function () {
  return this._grid;
};
