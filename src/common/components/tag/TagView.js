define(function(require) {
    var BaseView = require('common/util/BaseView'),

        template = require('text!common/components/tag/Tag.hbs');

    return BaseView.extend({
        template: template
    });
});