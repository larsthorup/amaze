/* eslint-env mocha */
import sinon from 'sinon';

import _ from '../../src/lib/util.mjs';
import cli from '../../src/cli/main.mjs';

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
    console.log.should.have.been.calledWith([
      '+---+---+',
      '| x     |',
      '+---+   +',
      '| x     |',
      '+---+---+',
      ''
    ].join('\n'));
  });
});
