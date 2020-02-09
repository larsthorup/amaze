module.exports = function (config) {
  config.set({
    basePath: '.',
    frameworks: ['mocha', 'requirejs'],
    files: [
      'src/require.conf.js',
      'test/karma-main.js',
      'test/main.js',
      { pattern: 'src/**/*.js', included: false },
      { pattern: 'test/**/*.js', included: false },
      { pattern: 'node_modules/chai/chai.js', included: false },
      { pattern: 'node_modules/lodash/lodash.js', included: false },
      { pattern: 'node_modules/sinon-chai/lib/sinon-chai.js', included: false },
      { pattern: 'node_modules/sinon/pkg/sinon.js', included: false },
      { pattern: 'node_modules/vsvg/dist/vsvg.js', included: false }
    ],
    customLaunchers: {
      Chrome_travis_ci: { // http://swizec.com/blog/how-to-run-javascript-tests-in-chrome-on-travis/swizec/6647
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    reporters: ['dots'],
    port: 9876,
    colors: true,
    // logLevel: config.LOG_DEBUG,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: process.env.TRAVIS ? ['Chrome_travis_ci'] : ['Chrome']
  });
};
