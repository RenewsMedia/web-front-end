define(function(require) {
    var BaseView = require('common/base/BaseView'),

        template = require('text!common/views/tags/templates/Tag.hbs');

    return BaseView.extend({
        template: template
    });
});