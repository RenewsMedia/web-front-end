define(function(require) {
    var BaseCollection = require('app/base/BaseCollection'),
        ArticleModel = require('components/article/ArticleModel');

    return BaseCollection.extend({
        urlRoot: '/articles',
        model: ArticleModel
    });
});