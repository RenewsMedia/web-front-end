/**
 * Application router
 * @module app/Router
 * @returns {Object}
 */

define(function(require) {
    var _ = require('underscore'),
        BaseClass = require('app/base/BaseClass'),
        _url = require('app/util/_url'),
        _window = require('app/util/_window'),
        ControllerFactory = require('app/ControllerFactory');

    return BaseClass.extend({
        initialize: function(config) {
            this.config = config;
            this.initEvents();
        },

        initEvents: function() {
            _window.onpopstate = _.bind(this.onPopState);
        },

        applyRoute: function(route) {
            var Controller, options;
            this.route = _url.parse(route);

            options = ControllerFactory.prepareParams(this.route.controller, this.route.params);

            if (this.route.controller === this.controllerName && this.controller) {
                this.controller.setOptions(options);
            } else {
                Controller = ControllerFactory.getConstructor(this.route.controller);
                this.controllerName = this.route.controller;
                this.controller = new Controller(options);
                this.controller.setElement(this.config.container);
            }

            if (route !== _window.location.href) {
                _window.history.pushState({
                    url: route
                }, 'title', route);
            }
        },
        
        onPopState: function(e) {
            var route = _window.location.origin;
            if (_.has(e.state, 'url')) {
                route = e.state.url;
            }
            this.applyRoute(route);
        }
    });
});