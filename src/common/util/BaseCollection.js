define(function(require) {
    var Backbone = require('backbone');

    var apiPrefix = '/api/v1'; // todo: move to config

    return Backbone.Collection.extend({
        url: function() {
            return apiPrefix + Backbone.Model.prototype.url.apply(this);
        }
    });
});