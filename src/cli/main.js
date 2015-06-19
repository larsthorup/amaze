var Grid = require('../model/grid');
var GridView = require('../view/ascii/grid');
var binaryTree = require('../algorithm/binaryTree');

function main(options) {
    var grid = new Grid(options.rows, options.columns);
    binaryTree(grid);
    console.log(new GridView({model: grid}).render());
}

module.exports = {
    main: main
}