define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Collection.extend({
        url: function() {
            return Backbone.Model.prototype.url.apply(this);
        }
    });
});