define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Util = require('Util'),
        location = window.location; // todo: create location manager

    var Router = function() {
        this.initialize();
    };

    _.extend(Router.prototype, Backbone.Events, {
        initialize: function() {

        },

        applyRoute: function(route) {

        }
    });

    return Router;
});