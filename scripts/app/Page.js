define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.View.extend({
        events: {
            'click a[href]': 'onLinkClick'
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