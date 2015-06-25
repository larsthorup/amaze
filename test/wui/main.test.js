/*eslint-env amd, mocha */
(function (depNames, factory) {
  if (typeof define === 'function' && define.amd) {
    define(depNames, factory);
  } else if (typeof exports === 'object') {
    // Note: cannot test DOM-referencing code on Node
  }
}(['../../src/wui/main'], function (wui) {

  describe('main', function () {

    it('render according to options');

  });

}));
