require.config({
  baseUrl: '../src',

  paths: {
    lodash: '../node_modules/lodash/lodash',
    vsvg: '../node_modules/vsvg/dist/vsvg'
  },
  shim: {
    vsvg: {
      exports: 'vsvg'
    }
  }
});
