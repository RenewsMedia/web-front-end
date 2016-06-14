define(function(require) {
    var BaseView = require('common/base/BaseView'),

        template = require('text!common/views/articles/SimpleArticle.hbs');

    return BaseView.extend({
        template: template
    });
});