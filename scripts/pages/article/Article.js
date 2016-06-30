define(function(require) {
    var BasePageController = require('app/base/BasePageController'),
        ArticleModel = require('components/article/ArticleModel'),
        ArticleView = require('components/article/ArticleView'),

        template = require('text!pages/article/Article.hbs');

    return BasePageController.extend({
        template: template,

        initialize: function(options) {
            this.articleModel = new ArticleModel({
                id: options.articleId
            });
            this.articleView = new ArticleView({
                model: this.articleModel
            });

            this.addRegions({
                article: this.articleView
            });

            this.articleModel.fetch();
        }
    }, {
        prepareParams: function(params) {
            return {
                articleId: params[0]
            };
        }
    });
});