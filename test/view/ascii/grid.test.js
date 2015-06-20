(function (depNames, factory) {
    if (typeof define === 'function' && define.amd) {
        define(depNames, factory);
    } else if (typeof exports === 'object') {
        var deps = [];
        for (var i = 0; i < depNames.length; ++i) {
            deps.push(require(depNames[i]));
        }
        module.exports = factory.apply(this, deps);
    }
}(['../../../src/model/grid', '../../../src/view/ascii/grid'], function (Grid, GridView) {

    describe('view/ascii/grid', function () {

        it('should produce a readable ascii representation of the grid', function () {
            var grid = new Grid(2, 2);
            grid.cell(0, 0).link(grid.cell(1, 0));
            grid.cell(1, 0).link(grid.cell(1, 1));
            grid.cell(0, 0).isLinked(grid.cell(1, 1)).should.equal(false);
            grid.cell(0, 0).mark(true);
            grid.cell(1, 1).mark(true);
            var view = new GridView({model: grid});
            view.render().should.equal([
                '+---+---+',
                '| x |   |',
                '+   +---+',
                '|     x |',
                '+---+---+',
                ''
            ].join('\n'));
        });

    });

}));
