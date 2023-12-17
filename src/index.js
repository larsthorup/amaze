import cli from './cli/main.js';
import { isAlgorithm } from './model/maze.js';
import { isViewType } from './view/views.js';

/** @typedef {import('./model/maze.js').Algorithm} Algorithm */
/** @typedef {import('./model/maze.js').MazeOptions} MazeOptions */

const [, , rows, columns, algorithm, view] = process.argv;
/** @type {MazeOptions} */
const options = {
  rows: parseInt(rows || '15'),
  columns: parseInt(columns || '15'),
  algorithm: isAlgorithm(algorithm) ? algorithm : 'recursiveBacktracker',
  view: isViewType(view) ? view : 'ascii'
};
cli.main(options);
