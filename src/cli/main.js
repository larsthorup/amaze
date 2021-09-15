const _ = require('lodash');
const Maze = require('../model/maze');
const views = {};
_.each(['ascii', 'svg'], viewName => {
  views[viewName] = require(`../view/${viewName}/grid`);
});

function main (options) {
  const maze = new Maze(options);
  const View = views[options.view];
  const view = new View({ model: maze.grid() });
  view.render();
  console.log(view.source());
}

module.exports = {
  main: main
};
