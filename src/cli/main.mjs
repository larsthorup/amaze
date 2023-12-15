import { range } from '../lib/util.mjs';

export function main() {
  console.log(`cli/main ${range(6)}`);
}

// const Maze = require('../model/maze');
// const views = {};
// ['ascii', 'svg'].forEach(viewName => {
//   views[viewName] = require(`../view/${viewName}/grid`);
// });

// function main (options) {
//   const maze = new Maze(options);
//   const View = views[options.view];
//   const view = new View({ model: maze.grid() });
//   view.render();
//   console.log(view.source());
// }

// module.exports = {
//   main
// };
