
describe('Drip', function () {

var analytics = window.analytics || require('analytics')
  , assert = require('assert')
  , equal = require('equals')
  , sinon = require('sinon')
  , when = require('when');

var settings = {
  account: '9999999'
};

before(function (done) {
  this.timeout(10000);
  this.spy = sinon.spy();
  analytics.ready(this.spy);
  analytics.initialize({ Drip: settings });
  this.integration = analytics._integrations.Drip;
  this.options = this.integration.options;
  when(function () { return window.htk; }, done);
});

describe('#name', function () {
  it('Drip', function () {
    assert(this.integration.name == 'Drip');
  });
});

describe('#key', function () {
  it('account', function () {
    assert(this.integration.key == 'account');
  });
});

describe('#defaults', function () {
  it('account', function () {
    assert(this.integration.defaults.account === '');
  });
});

describe('#initialize', function () {
  it('should call ready', function () {
    assert(this.spy.called);
  });

  it('should store options', function () {
    assert(this.options.account == settings.account);
  });
});

});