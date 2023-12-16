import '../test/mocha_setup.mjs';

import '../test/lib/util.test.mjs';
import '../test/model/cell.test.mjs';
import '../test/model/grid.test.mjs';
import '../test/model/distances.test.mjs';
import '../test/view/ascii/grid.test.mjs';
import '../test/view/svg/grid.test.mjs';
import '../test/algorithm/maze/binaryTree.test.mjs';
import '../test/algorithm/maze/sideWinder.test.mjs';
import '../test/algorithm/maze/aldousBroder.test.mjs';
import '../test/algorithm/maze/recursiveBacktracker.test.mjs';
import '../test/algorithm/distance/dijkstra.test.mjs';
import '../test/algorithm/path/longest.test.mjs';
import '../test/wui/main.test.mjs';

window.mocha.run((failures) => { window.__mocha_failures__ = failures; });
