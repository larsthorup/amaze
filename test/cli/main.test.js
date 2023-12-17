/* eslint-env mocha */
import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';

import _ from '../../src/lib/util.js';
import cli from '../../src/cli/main.js';

describe('main/cli', function () {
  beforeEach(function () {
    this.sinon = sinon.createSandbox();
  });

  afterEach(function () {
    this.sinon.restore();
  });

  it('render according to options', function () {
    this.sinon.stub(_, 'random').returnsArg(0); // To make the algorithm predictable for testing
    this.sinon.stub(console, 'log');
    cli.main({
      rows: 2,
      columns: 2,
      algorithm: 'binaryTree',
      view: 'ascii'
    });
    expect(console.log).to.have.been.calledWith([
      '+---+---+',
      '| x     |',
      '+---+   +',
      '| x     |',
      '+---+---+',
      ''
    ].join('\n'));
  });
});
