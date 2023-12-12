/* eslint-env amd */
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
}([
  './cell',
  '../model/grid',
  '../algorithm/path/longest',
  '../algorithm/maze/binaryTree',
  '../algorithm/maze/sideWinder',
  '../algorithm/maze/aldousBroder',
  '../algorithm/maze/recursiveBacktracker'
], function (Cell, Grid, longest, binaryTree, sideWinder, aldousBroder, recursiveBacktracker) {
  const algorithms = {
    binaryTree: binaryTree,
    sideWinder: sideWinder,
    aldousBroder: aldousBroder,
    recursiveBacktracker: recursiveBacktracker
  };

  const Maze = function (options) {
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

  return Maze;
}));
