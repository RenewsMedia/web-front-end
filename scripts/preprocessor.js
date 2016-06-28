define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        config = require('config');

    // Add host and base to each api request
    var backboneSyncBuffer = Backbone.sync;
    Backbone.sync = function(method, model, options) {
        backboneSyncBuffer(method, model, _.extend(options, {
            url: config.api.proto + '://' + config.api.host + config.api.base + (options.url || _.result(model, 'url'))
        }));
    };
});