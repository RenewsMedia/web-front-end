define(function(require) {
    var BaseView = require('common/util/BaseView'),

        template = require('text!common/components/articlePreview/articlePreview.hbs');

    return BaseView.extend({
        template: template
    });
});