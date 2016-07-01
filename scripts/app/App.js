/**
 * App controller
 * @module app/App
 * @returns {Object}
 */

define(function(require) {
    var _ = require('underscore'),
        _window = require('app/util/_window'),
        BaseClass = require('app/base/BaseClass'),
        AuthManager = require('app/AuthManager'),
        Page = require('app/Page'),
        Router = require('app/Router'),
        GlobalBus = require('app/GlobalBus'),
        ErrorHandler = require('app/ErrorHandler');

    return BaseClass.extend({
        constructor: function(config) {
            this.config = config;

            _window.onerror = _.bind(ErrorHandler.handle, ErrorHandler);

            // Should starts the app when current user is ready
            this.listenTo(AuthManager, 'userReady', this.initialize);
            AuthManager.checkUser();
        },

        initialize: function() {
            this.page = new Page({
                el: this.config.el
            });
            this.router = new Router({
                container: this.page.$('.content')
            });

            this.initEvents();
            this.router.applyRoute(_window.location.href);
        },

        initEvents: function() {
            this.listenTo(this.page, 'click:link', this.redirect);
            this.listenTo(GlobalBus, 'redirect', this.redirect);
        },

        redirect: function(url) {
            this.router.applyRoute(url);
        }
    });
});