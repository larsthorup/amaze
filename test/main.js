if (typeof define === 'function' && define.amd) {

    var initFiles = ['../test/chai_setup'];
    var allTestFiles = [
        '../test/model/cell.test.js',
        '../test/model/grid.test.js',
        '../test/view/ascii/grid.test.js',
        '../test/algorithm/binaryTree.test.js',
    ];

    require.config({
        baseUrl: '../src',

        paths: {
            'lodash': '../node_modules/lodash/index',
            'mocha': '../node_modules/mocha/mocha',
            'chai': '../node_modules/chai/chai',
            'sinon': '../node_modules/sinon/pkg/sinon',
            'sinon-chai': '../node_modules/sinon-chai/lib/sinon-chai'
        },
        shim: {},

        // dynamically load all test files
        deps: [].concat(initFiles, allTestFiles),

        // we have to kickoff mocha, as it is asynchronous
        callback: function () {
            if (window.mochaPhantomJS) {
                mochaPhantomJS.run();
            }
            else {
                mocha.run();
            }
        }
    });
}