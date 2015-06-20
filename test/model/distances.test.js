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
}(['../../src/model/cell', '../../src/model/distances'], function (Cell, Distances) {

    describe('model/distances', function () {

        describe('constructor', function () {

            it('should set the distance of root to zero', function () {
                var root = new Cell(1, 1);
                var distances = new Distances(root);
                distances.distance(root).should.equal(0);
            });

        });

    });

}));

