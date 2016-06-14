define(function(require) {
    var BaseView = require('common/base/BaseView'),

        template = require('text!common/entities/tags/templates/Tag.hbs');

    return BaseView.extend({
        template: template
    });
});