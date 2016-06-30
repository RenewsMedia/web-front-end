define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        AuthManager = require('app/AuthManager'),
        Page = require('app/Page'),
        Router = require('app/Router');

    var App = function(config) {
        this.config = config;

        // Should starts the app when current user is ready
        this.listenTo(AuthManager, 'userReady', this.initialize);
        AuthManager.checkUser();
    };

    _.extend(App.prototype, Backbone.Events, {
        initialize: function() {
            this.page = new Page({
                el: this.config.el
            });
            this.router = new Router({
                container: this.page.$('.content')
            });

            this.initEvents();
        },

        initEvents: function() {
            this.listenTo(this.page, 'click:link', this.onLinkClick);
        },

        onLinkClick: function(href) {
            this.router.applyRoute(href);
        }
    });

    return App;
});