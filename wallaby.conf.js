module.exports = function () {
    return {
        testFramework: 'mocha@2.1.0',
        files: [
            'src/**/*.js',
            'test/**/*.js',
            {pattern: 'test/**/*.test.js', ignore: true},
        ],
        tests: [
            'test/**/*.test.js'
        ],
        env: {
            type: 'node',
            runner: 'node',
        },
        workers: {
            recycle: true
        },
        bootstrap: function (wallaby) {
            // ToDo: avoid copy from test/setup.js
            var chai = require('chai');
            global.should = chai.should();  // Note: enable the actual.should.expectation style
            chai.use(require('sinon-chai')); // Note: enable sinon expectations
            // chai.use(require('chai-as-promised')); // Note: enable the eventually expectation
        }
    };
};