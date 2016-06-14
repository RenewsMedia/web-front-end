define(function(require) {
    var BaseView = require('common/util/BaseView'),

        template = require('text!common/entities/articles/templates/SimpleArticle.hbs');

    return BaseView.extend({
        template: template
    });
});