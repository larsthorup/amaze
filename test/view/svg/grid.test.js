/*eslint-env amd, mocha */
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
}(['../../../src/model/grid', '../../../src/view/svg/grid'], function (Grid, GridView) {

  describe('view/svg/grid', function () {

    it('should produce an svg representation of the grid');

  });

}));
