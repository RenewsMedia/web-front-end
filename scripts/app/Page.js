/**
 * Base page controller
 * @module app/Page
 * @returns {Object}
 */

define(function(require) {
    var BaseView = require('app/base/BaseView');

    return BaseView.extend({
        events: {
            'click a[href]': 'onLinkClick'
        },

        onLinkClick: function(e) {
            e.preventDefault();
            this.trigger('click:link', e.currentTarget.href);
        }
    });
});