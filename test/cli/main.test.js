/* eslint-env amd, mocha */
(function (depNames, factory) {
  if (typeof define === 'function' && define.amd) {
    define(depNames, factory);
  } else if (typeof exports === 'object') {
    const deps = [];
    for (let i = 0; i < depNames.length; ++i) {
      deps.push(require(depNames[i]));
    }
    module.exports = factory.apply(this, deps);
  }
}(['sinon', '../../src/lib/util', '../../src/cli/main'], function (sinon, _, cli) {
  describe('main', function () {
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
}));
