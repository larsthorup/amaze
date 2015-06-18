(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['chai', 'sinon-chai'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('chai'), require('sinon-chai'));
    }
}(function (chai, sinonChai) {

    // Chai setup
    this.should = chai.should();  // Note: enable the actual.should.expectation style
    chai.use(sinonChai); // Note: enable sinon expectations
    // chai.use(require('chai-as-promised')); // Note: enable the eventually expectation

}));
