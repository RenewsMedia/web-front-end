define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        _cookie = require('app/util/_cookie'),
        config = require('config'),
        CurrentUser = require('app/CurrentUser');

    var AuthManager = function() {
        return this;
    };

    _.extend(AuthManager.prototype, Backbone.Events, {
        checkUser: function() {
            var userId = _cookie.get(config.auth.id_cookie);
            if (userId) {
                CurrentUser.set('id', userId);
                CurrentUser.fetch();
                CurrentUser.one('request', _.bind(this.trigger, this, 'userReady'));
            } else {
                this.trigger('userReady');
            }
        },

        signIn: function(data) {
            return this._sendRequest({
                url: '/sign/in',
                data: data
            });
        },

        signUp: function(data) {
            return this._sendRequest({
                url: '/sign/up',
                data: data
            });
        },

        signOut: function() {
            return this._sendRequest({
                url: '/sign/out'
            });
        },

        _sendRequest: function(options) {
            var dfd = Backbone.$.Deferred();

            Backbone.sync('POST', this, options)
                .done(function(response) {
                    dfd.resolve(_.result(response, 'result') || false);
                });

            return dfd;
        }
    });

    return new AuthManager();
});