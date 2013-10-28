
var integration = require('../integration')
  , load = require('load-script');

/**
 * Expose `Drip` integration.
 */

var Drip = module.exports = integration('Drip');

/**
 * Required key.
 */

Drip.prototype.key = 'account';

/**
 * Default options.
 */

Drip.prototype.defaults = {
  account: '',
  debug: false
};

/**
 * Initialize.
 *
 * @param {Object} options
 * @param {Function} ready
 */

Drip.prototype.initialize = function (options, ready) {
  window._dcq || (window._dcq = []);
  window._dcs = options || {};
  load('//tag.getdrip.com/' + options.account + '.js', ready);
};