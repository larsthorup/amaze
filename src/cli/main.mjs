import { Maze } from '../model/maze.mjs';

// const views = {};
// ['ascii', 'svg'].forEach(viewName => {
//   views[viewName] = require(`../view/${viewName}/grid`);
// });

export function main (options) {
  const maze = new Maze(options);
  //   const View = views[options.view];
  //   const view = new View({ model: maze.grid() });
  //   view.render();
  //   console.log(view.source());
  console.log(`cli/main ${maze.grid().rows()}`);
}
