
var alias = require('alias')
  , integration = require('../integration')
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

/**
 * Track.
 *
 * @param {String} event
 * @param {Object} properties (optional)
 * @param {Object} options (optional)
 */

Drip.prototype.track = function (event, properties, options) {
  properties || (properties = {});
  alias(properties, { revenue: 'value' });
  properties.id = extractGoal(options);
  if (!properties.id) return;
  window._dcq.push(['trackConversion', properties]);
};

function extractGoal (options) {
  options || (options = {});

  if (options.Drip && options.Drip.goal) {
    return options.Drip.goal;
  } else {
    return null;
  }
}