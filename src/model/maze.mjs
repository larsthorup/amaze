import { Grid } from './grid.mjs';

import { aldousBroder } from '../algorithm/maze/aldousBroder.mjs';
import { binaryTree } from '../algorithm/maze/binaryTree.mjs';
import { recursiveBacktracker } from '../algorithm/maze/recursiveBacktracker.mjs';
import { sideWinder } from '../algorithm/maze/sideWinder.mjs';
import { longest } from '../algorithm/path/longest.mjs';

const algorithms = {
  binaryTree,
  sideWinder,
  aldousBroder,
  recursiveBacktracker
};

export const Maze = function (options) {
  this.createGrid(options);
  this.carveMaze(options);
  this.markPath();
};

Maze.prototype.createGrid = function (options) {
  this._grid = new Grid(options.rows, options.columns);
};

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
