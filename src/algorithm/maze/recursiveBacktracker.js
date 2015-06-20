(function (depNames, factory) {
    if (typeof define === 'function' && define.amd) {
        define(depNames, factory);
    } else if (typeof exports === 'object') {
        var deps = [];
        for(var i = 0; i < depNames.length; ++i) {
            deps.push(require(depNames[i]));
        }
        module.exports = factory.apply(this, deps);
    }
}(['lodash'], function (_) {

    function hasNoLinks (cell) {
        return _.isEmpty(cell.links());
    }

    function recursiveBacktracker(grid) {
        var start = grid.sample();
        var stack = [start];
        while(_.any(stack)) {
            var current = _.last(stack);
            var neighbors = _.filter(current.neighbors(), hasNoLinks);
            if(_.isEmpty(neighbors)) {
                stack.pop();
            } else {
                neighbor = _.sample(neighbors);
                current.link(neighbor);
                stack.push(neighbor);
            }
        }
    }

    return recursiveBacktracker;

}));
