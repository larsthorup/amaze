/* eslint-env amd */
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
}(['lodash'], function (_) {

  function sideWinder (grid) {
    grid.eachRow(function (row) {
      var run = [];
      _.each(row, function (cell) {
        run.push(cell);
        var atEasternBoundary = !_.isObject(cell.east());
        var atNorthernBoundary = !_.isObject(cell.north());
        var shouldCloseOut = atEasternBoundary || (!atNorthernBoundary && _.random(2) === 0);
        if (shouldCloseOut) {
          var member = _.sample(run);
          if (member.north()) member.link(member.north());
          _.remove(run);
        } else {
          if (cell.east()) cell.link(cell.east());
        }
      });
    });
  }

  return sideWinder;

}));
