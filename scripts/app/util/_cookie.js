/**
 * Util for cookie management
 * @module app/util/_cookie
 * @returns {Object} - Singleton of cookie manager
 */

define(function(require) {
    var _ = require('underscore'),
        _window = require('app/util/_window'),
        moment = require('moment');

    var Cookie = function() {
        this.source = _window.document.cookie;
        this.controlCache = '';
        this._cookies = {};
    };

    _.extend(Cookie.prototype, {
        parse: function() {
            if (this.source === this.controlCache) {
                return;
            }
            this._cookies = {};

            _.each(this.source.split(';'), function(pair) {
                pair = pair.trim().split('=');
                this._cookies[pair[0]] = pair[1];
            }, this);
            this.controlCache = this.source;
        },

        'get': function(name) {
            this.parse();
            return this._cookies[name];
        },

        'set': function(name, value, options) {
            var expires = _.result(options, 'expires');

            if (_.isNumber(expires)) {
                expires = moment.unix(expires);
            } else if (!expires) {
                expires = moment().add(1, 'year');
            }

            _window.document.cookie = name + '=' + value + '; path=/; expires=' + expires.toString();
            this.parse();
        },

        drop: function(name) {
            this.set(name, '', { expires: 0 });
            this.parse();
        }
    });

    return new Cookie();
});