import sinon from 'sinon';

import { main } from '../../src/wui/main.mjs';

if (typeof document === "object") {
  // Note: cannot test DOM-referencing code on Node
  describe('main/wui', function () {
    let element;
    beforeEach(function () {
      element = {};
      sinon.stub(document, 'getElementById').returns(element);
    });

    afterEach(function () {
      document.getElementById.restore();
    });

    it('should render according to options', function () {
      main();
      document.getElementById.should.have.been.calledWith('wui');
      element.innerHTML.should.equal('wui/main 0,1,2,3,4,5');
    });
  });
}

// /* eslint-env amd, mocha */
// (function (depNames, factory) {
//   if (typeof define === 'function' && define.amd) {
//     define(depNames, factory);
//   } else if (typeof exports === 'object') {
//   }
// }(['../../src/wui/main'], function (wui) {
//   describe('main', function () {
//     it.skip('render according to options');
//   });
// }));
