import '../test/mocha_setup.mjs';

// const allTestFiles = [
import '../test/model/cell.test.mjs';
import '../test/model/grid.test.mjs';
import '../test/model/distances.test.mjs';
// '../test/view/ascii/grid.test',
// '../test/view/svg/grid.test',
// '../test/algorithm/maze/binaryTree.test',
// '../test/algorithm/maze/sideWinder.test',
// '../test/algorithm/maze/aldousBroder.test',
// '../test/algorithm/maze/recursiveBacktracker.test',
// '../test/algorithm/distance/dijkstra.test',
// '../test/algorithm/path/longest.test',
import '../test/wui/main.test.mjs';
// ];

window.mocha.run((failures) => { window.__mocha_failures__ = failures; });
