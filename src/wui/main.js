/*eslint-env amd */

define([
  '../browser/bling',
  '../model/grid',
  '../view/svg/grid',
  '../algorithm/path/longest',
  '../algorithm/maze/recursiveBacktracker'
], function ($, Grid, SvgGridView, longest, createMaze) {

  // ToDo: share with cli/main
  function main () {
    var options = {
      rows: 15,
      columns: 15
    };
    var grid = new Grid(options.rows, options.columns);
    createMaze(grid);
    var path = longest(grid);
    path.start.mark(true);
    path.end.mark(true);
    var view = new SvgGridView({
      model: grid,
      pixelsPerCell: 20
    });
    view.render();
    $('#wui')[0].innerHTML = view.toHtml();
  }

  return {
    main: main
  };

});
