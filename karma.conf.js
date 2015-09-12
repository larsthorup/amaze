module.exports = function (config) {
  config.set({
    basePath: '.',
    frameworks: ['mocha', 'requirejs'],
    files: [
      'src/require.conf.js',
      'test/karma-main.js',
      'test/main.js',
      {pattern: 'src/**/*.js', included: false},
      {pattern: 'test/**/*.js', included: false},
      {pattern: 'node_modules/chai/chai.js', included: false},
      {pattern: 'node_modules/lodash/index.js', included: false},
      {pattern: 'node_modules/sinon-chai/lib/sinon-chai.js', included: false},
      {pattern: 'node_modules/sinon/pkg/sinon.js', included: false},
      {pattern: 'node_modules/vsvg/dist/vsvg.js', included: false}
    ],
    exclude: [],
    reporters: ['dots'],
    port: 9876,
    colors: true,
    // logLevel: config.LOG_DEBUG,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome']
  });
};
