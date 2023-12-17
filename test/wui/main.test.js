/* eslint-env mocha */
import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';

import { assert } from '../../src/lib/assert.js';
import _ from '../../src/lib/util.js';
import wui from '../../src/wui/main.js';

if (typeof document === 'object') {
  // Note: cannot test DOM-referencing code on Node
  describe('main/wui', function () {
    /** @type {HTMLElement | undefined} */
    let wuiDiv;

    beforeEach(function () {
      this.sinon = sinon.createSandbox();
      wuiDiv = document.createElement('div');
      wuiDiv.id = 'wui';
      document.body.appendChild(wuiDiv);
    });

    afterEach(function () {
      if (wuiDiv) wuiDiv.remove();
      this.sinon.restore();
    });

    it('should render according to options', function () {
      this.sinon.stub(_, 'random').callsFake(
        /**
         * @param {number} limit
         * @returns
         */
        (limit) => limit - 1
      ); // To make the algorithm predictable for testing
      wui.main({
        rows: 2,
        columns: 2,
        algorithm: 'recursiveBacktracker',
        view: 'svg'
      });
      assert(wuiDiv);
      expect(wuiDiv
        .innerHTML).to.equal(
        '<svg width="41" height="41"><line x1="0" y1="0" x2="20" y2="0" style="stroke: black"></line><line x1="0" y1="0" x2="0" y2="20" style="stroke: black"></line><line x1="0" y1="20" x2="20" y2="20" style="stroke: black"></line><circle cx="10" cy="10" r="6" style="stroke: black; fill: black"></circle><line x1="20" y1="0" x2="40" y2="0" style="stroke: black"></line><line x1="40" y1="0" x2="40" y2="20" style="stroke: black"></line><line x1="0" y1="20" x2="0" y2="40" style="stroke: black"></line><line x1="0" y1="40" x2="20" y2="40" style="stroke: black"></line><circle cx="10" cy="30" r="6" style="stroke: black; fill: black"></circle><line x1="40" y1="20" x2="40" y2="40" style="stroke: black"></line><line x1="20" y1="40" x2="40" y2="40" style="stroke: black"></line></svg>'
      );
    });
  });
}
