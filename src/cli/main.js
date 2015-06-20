var Grid = require('../model/grid');
var GridView = require('../view/ascii/grid');
var longest = require('../algorithm/path/longest');
var _ = require('lodash');
var algorithms = {};
_.each(['binaryTree', 'sideWinder', 'aldousBroder'], function (algorithm) {
    algorithms[algorithm] = require('../algorithm/maze/' + algorithm);
});

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