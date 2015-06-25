var GridView = require('../view/ascii/grid');
var Maze = require('../model/maze');

function main (options) {
  var maze = new Maze(options);
  console.log(new GridView({model: maze.grid()}).render());
}

module.exports = {
  main: main
};
