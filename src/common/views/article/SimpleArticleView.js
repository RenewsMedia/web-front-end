define(function(require) {
    var BaseView = require('common/base/BaseView'),

        template = require('text!common/views/article/SimpleArticle.hbs');

    return BaseView.extend({
        template: template
    });
});