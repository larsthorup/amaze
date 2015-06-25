var Maze = require('../model/maze');
var AsciiGridView = require('../view/ascii/grid');

function main (options) {
  var maze = new Maze(options);
  var view = new AsciiGridView({model: maze.grid()});
  var ascii = view.render();
  console.log(ascii);
}

module.exports = {
  main: main
};
