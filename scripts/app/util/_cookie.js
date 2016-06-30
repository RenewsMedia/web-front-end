define(function(require) {
    var _ = require('underscore'),
        moment = require('moment');

    var Cookie = function() {
        this.source = document.cookie;
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
            var expires = options.expires;

            if (_.isNumber(expires)) {
                expires = moment.unix(expires);
            } else if (!expires) {
                expires = moment().add(1, 'year');
            }

            document.cookie = name + '=' + value + '; expires=' + expires.toString();
            this.parse();
        },

        drop: function(name) {
            this.set(name, '', { expires: 0 });
            this.parse();
        }
    });

    return new Cookie();
});