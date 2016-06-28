define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        url: function() {
            return Backbone.Model.prototype.url.apply(this);
        }
    });
});