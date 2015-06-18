if (typeof define === 'function' && define.amd) {

    var initFiles = ['../test/setup'];
    var allTestFiles = [
        '../test/model/cell.test.js',
    ];

    require.config({
        // Karma serves files under /base, which is the basePath from your config file
        baseUrl: '../src',

        // ToDo: figure out if we can share the require.config from elsewhere
        paths: {
            'mocha': '../node_modules/mocha/mocha',
            'chai': '../node_modules/chai/chai',
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