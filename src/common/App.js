define(function(require) {
    var _ = require('underscore');

    var App = function(config) {
        this.config = config;
        this.initialize();
    };

    _.extend(App.prototype, {
        initialize: function() {
            
        }
    });

    return App;
});