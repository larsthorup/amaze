var _ = require('lodash');
var Maze = require('../model/maze');
var views = {};
_.each(['ascii', 'svg'], viewName => {
  views[viewName] = require(`../view/${viewName}/grid`);
});

function main (options) {
  var maze = new Maze(options);
  var View = views[options.view];
  var view = new View({ model: maze.grid() });
  view.render();
  console.log(view.source());
}

module.exports = {
  main: main
};
