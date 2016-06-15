define(function(require) {
    var BaseCollection = require('common/util/BaseCollection'),
        ArticleModel = require('common/components/article/ArticleModel');

    return BaseCollection.extend({
        urlRoot: '/articles',
        model: ArticleModel
    });
});