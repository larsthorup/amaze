/*eslint-env amd */

// ToDo: share this with test/main.js
require.config({
  baseUrl: '../src',

  paths: {
    'lodash': '../node_modules/lodash/index',
    'vsvg': '../node_modules/vsvg/dist/vsvg'
  },
  shim: {
    'vsvg': {
      exports: 'vsvg'
    }
  }
});

require.config({
  deps: ['./wui/main'],

  // we have to kickoff mocha, as it is asynchronous
  callback: function (wui) {
    wui.main();
  }
});
