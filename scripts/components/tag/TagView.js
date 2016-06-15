define(function(require) {
    var BaseView = require('app/base/BaseView'),

        template = require('text!components/tag/Tag.hbs');

    return BaseView.extend({
        template: template
    });
});