import './mocha_setup.js';

import './lib/util.test.js';
import './model/cell.test.js';
import '../test/model/grid.test.js';
import './model/distances.test.js';
import '../test/view/ascii/grid.test.js';
import '../test/view/svg/grid.test.js';
import './algorithm/maze/binaryTree.test.js';
import './algorithm/maze/sideWinder.test.js';
import './algorithm/maze/aldousBroder.test.js';
import './algorithm/maze/recursiveBacktracker.test.js';
import './algorithm/distance/dijkstra.test.js';
import './algorithm/path/longest.test.js';
import '../test/wui/main.test.js';

// @ts-ignore Property 'mocha' does not exist on type 'Window & typeof globalThis'.
window.mocha.run(
  /**
   * @param {number} failures
   */
  (failures) => {
    window.__mocha_failures__ = failures;
  }
);
