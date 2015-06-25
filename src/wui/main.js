/*eslint-env amd */

define([
  '../browser/bling',
  '../view/svg/grid',
  '../model/maze'
], function ($, SvgGridView, Maze) {

  function main () {
    var options = {
      rows: 15,
      columns: 15,
      algorithm: 'recursiveBacktracker'
    };
    var maze = new Maze(options);
    var view = new SvgGridView({
      model: maze.grid(),
      pixelsPerCell: 20
    });
    view.render();
    $('#wui')[0].innerHTML = view.toHtml();
  }

  return {
    main: main
  };

});
