define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Util = require('Util'),
        ControllerFactory = require('common/ControllerFactory'),
        history = window.history;

    var Router = function() {
        this.initialize();
    };

    _.extend(Router.prototype, Backbone.Events, {
        initialize: function() {
            this.initEvents();
            this.applyRoute(window.location.href);
        },

        initEvents: function() {
            window.onpopstate = _.bind(this.onPopState)
        },

        applyRoute: function(route) {
            var Controller, options;
            this.route = Util.url.parse(route);

            options = ControllerFactory.prepareParams(this.route.controller, this.route.params);

            if (this.route.controller === this.controllerName) {
                this.controller.set(options);
            } else {
                Controller = ControllerFactory.getConstructor(this.route.controller);
                this.controllerName = this.route.controller;
                this.controller = new Controller(options);
                this.trigger('controllerReady', this.controller);
            }

            if (route !== window.location.href) {
                history.pushState({
                    url: route
                }, 'Renews', route);
            }
        },

        onPopState: function(e) {
            var route;
            if (_.has(e.state, 'url')) {
                route = e.state.url;
            } else {
                route = window.location.origin;
            }
            this.applyRoute(route);
        }
    });

    return Router;
});