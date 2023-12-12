require.config({
  baseUrl: '../src',

  paths: {
    vsvg: '../node_modules/vsvg/dist/vsvg'
  },
  shim: {
    vsvg: {
      exports: 'vsvg'
    }
  }
});
