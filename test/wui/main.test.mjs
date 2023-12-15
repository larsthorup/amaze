/* eslint-env mocha */
import sinon from 'sinon';

import wui from '../../src/wui/main.mjs';

if (typeof document === 'object') {
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
      wui.main();
      document.getElementById.should.have.been.calledWith('wui');
      element.innerHTML.should.equal('wui/main 15');
    });
  });
}
