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
            require('./test/setup');
        }
    };
};