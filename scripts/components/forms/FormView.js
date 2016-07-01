define(function(require) {
    var BaseView = require('app/base/BaseView');
    
    return BaseView.extend({
        events: {
            'submit': 'onSubmit'
        },
        
        serialize: function() {
            return this.$el.serialize();
        },

        onSubmit: function(e) {
            e.preventDefault();
            this.trigger('submit', this.serialize());
        }
    });
});