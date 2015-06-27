/*eslint-env amd */
if (typeof define === 'function' && define.amd) {

  var initFiles = ['../test/mocha_setup'];
  var allTestFiles = [
    '../test/model/cell.test.js',
    '../test/model/grid.test.js',
    '../test/model/distances.test.js',
    '../test/view/ascii/grid.test.js',
    '../test/view/svg/grid.test.js',
    '../test/algorithm/maze/binaryTree.test.js',
    '../test/algorithm/maze/sideWinder.test.js',
    '../test/algorithm/maze/aldousBroder.test.js',
    '../test/algorithm/maze/recursiveBacktracker.test.js',
    '../test/algorithm/distance/dijkstra.test.js',
    '../test/algorithm/path/longest.test.js',
    '../test/wui/main.test.js'
  ];

  // Note: require.conf.js is already loaded by now
  require.config({

    paths: {
      'mocha': '../node_modules/mocha/mocha',
      'chai': '../node_modules/chai/chai',
      'sinon': '../node_modules/sinon/pkg/sinon',
      'sinon-chai': '../node_modules/sinon-chai/lib/sinon-chai'
    },

    // dynamically load all test files
    deps: [].concat(initFiles, allTestFiles),

    // we have to kickoff mocha, as it is asynchronous
    callback: function () {
      if (window.mochaPhantomJS) {
        window.mochaPhantomJS.run();
      } else {
        window.mocha.run();
      }
    }
  });
}
