define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.View.extend({
        initialize: function() {
            this.initEvents();
        },

        initEvents: function() {
            this.$el.on('click', 'a[href]', _.bind(this.onLinkClick, this));
        },

        onLinkClick: function(e) {
            if (e.ctrlKey || e.which !== 1) {
                return;
            }
            e.preventDefault();
            this.trigger('click:link', e.currentTarget.href);
        }
    });
});