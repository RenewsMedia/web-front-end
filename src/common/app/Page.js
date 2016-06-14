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
            if (
                e.ctrlKey ||
                e.which !== 1 ||
                (/(\.(htm|js|json|css|jpg|png|ico|woff|ttf|map))$/i).test(e.currentTarget.href)
            ) {
                return;
            }
            e.preventDefault();
            this.trigger('click:link', e.currentTarget.href);
        }
    });
});