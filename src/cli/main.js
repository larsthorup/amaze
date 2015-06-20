var Grid = require('../model/grid');
var GridView = require('../view/ascii/grid');
var longest = require('../algorithm/path/longest');
var algorithms = {
    binaryTree: require('../algorithm/maze/binaryTree'),
    sideWinder: require('../algorithm/maze/sideWinder')
};

function main(options) {
    var grid = new Grid(options.rows, options.columns);
    algorithms[options.algorithm](grid);
    var path = longest(grid);
    path.start.mark(true);
    path.end.mark(true);
    console.log(new GridView({model: grid}).render());
}

module.exports = {
    main: main
};