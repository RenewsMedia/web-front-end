/**
 * Authorization manager
 * @module app/AuthManager
 * @returns {Object}
 */

define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        _window = require('app/util/_window'),
        _cookie = require('app/util/_cookie'),
        config = require('config'),
        BaseClass = require('app/base/BaseClass'),
        CurrentUser = require('app/CurrentUser');

    var AuthManager = BaseClass.extend({
        checkUser: function() {
            var userId = _cookie.get(config.auth.id_cookie);
            if (userId) {
                CurrentUser.set('id', userId);
                CurrentUser.fetch();
                CurrentUser.once('sync', _.bind(this.trigger, this, 'userReady'));
            } else {
                this.trigger('userReady');
            }
        },

        signIn: function(data) {
            return this._sendRequest({
                url: '/sign/in',
                data: data
            }).done(_.bind(this.setAuthCookies, this));
        },

        signUp: function(data) {
            return this._sendRequest({
                url: '/sign/up',
                data: data
            }).done(_.bind(this.setAuthCookies, this));
        },

        signOut: function() {
            var dfd = new Backbone.$.Deferred();
            _cookie.drop(config.auth.id_cookie);
            _cookie.drop(config.auth.pass_cookie);
            dfd.resolve();
            return dfd;
        },

        setAuthCookies: function(data) {
            if (!_.result(data, 'id') || !_.result(data, 'password')) {
                return;
            }
            _cookie.set(config.auth.id_cookie, data.id);
            _cookie.set(config.auth.pass_cookie, data.password);
            _window.location.reload();
        },

        _sendRequest: function(options) {
            return Backbone.sync('create', this, _.extend({
                type: 'post'
            }, options));
        }
    });

    return new AuthManager();
});