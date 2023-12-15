import '../test/mocha_setup.mjs';
import '../test/wui/main.test.mjs';

// /* eslint-env amd */
// if (typeof define === 'function' && define.amd) {
//   const initFiles = ['../test/mocha_setup'];
//   const allTestFiles = [
//     '../test/model/cell.test',
//     '../test/model/grid.test',
//     '../test/model/distances.test',
//     '../test/view/ascii/grid.test',
//     '../test/view/svg/grid.test',
//     '../test/algorithm/maze/binaryTree.test',
//     '../test/algorithm/maze/sideWinder.test',
//     '../test/algorithm/maze/aldousBroder.test',
//     '../test/algorithm/maze/recursiveBacktracker.test',
//     '../test/algorithm/distance/dijkstra.test',
//     '../test/algorithm/path/longest.test',
//     '../test/wui/main.test'
//   ];

//   // Note: require.conf.js is already loaded by now
//   require.config({
//     paths: {
//       mocha: '../node_modules/mocha/mocha',
//       chai: '../node_modules/chai/chai',
//       sinon: '../node_modules/sinon/pkg/sinon',
//       'sinon-chai': '../node_modules/sinon-chai/lib/sinon-chai'
//     },

//     // dynamically load all test files
//     deps: [].concat(initFiles, allTestFiles),

//     // we have to kickoff mocha, as it is asynchronous
//     callback: function () {
window.mocha.run((failures) => { window.__mocha_failures__ = failures; });
//     }
//   });
// }
