var Grid = require('../model/grid');
var GridView = require('../view/ascii/grid');
var algorithms = {
    binaryTree: require('../algorithm/maze/binaryTree'),
    sideWinder: require('../algorithm/maze/sideWinder')
};

function main(options) {
    var grid = new Grid(options.rows, options.columns);
    algorithms[options.algorithm](grid);
    console.log(new GridView({model: grid}).render());
}

module.exports = {
    main: main
};