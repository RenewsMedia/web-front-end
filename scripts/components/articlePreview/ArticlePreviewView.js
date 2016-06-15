define(function(require) {
    var BaseView = require('app/base/BaseView'),

        template = require('text!components/articlePreview/articlePreview.hbs');

    return BaseView.extend({
        template: template
    });
});