import { range } from '../lib/util.mjs';

export function main() {
  document.getElementById('wui').innerHTML = `wui/main ${range(6)}`;
}

// /* eslint-env amd */

// define([
//   '../browser/bling',
//   '../view/svg/grid',
//   '../model/maze'
// ], function ($, SvgGridView, Maze) {
//   function main () {
//     const options = {
//       rows: 15,
//       columns: 15,
//       algorithm: 'recursiveBacktracker',
//       view: 'svg'
//     };
//     const maze = new Maze(options);
//     const view = new SvgGridView({
//       model: maze.grid()
//     });
//     view.render();
//     $('#wui')[0].innerHTML = view.source();
//   }

//   return {
//     main
//   };
// });
