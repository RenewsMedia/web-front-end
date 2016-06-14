define(function(require) {
    var BaseView = require('common/base/BaseView'),

    template = require('text!common/views/article/Article.hbs');
    
    return BaseView.extend({
        template: template
    });
});