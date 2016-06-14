define(function(require) {
    var BaseCollectionView = require('common/base/BaseCollectionView'),
        SimpleArticleView = require('common/views/article/SimpleArticleView'),

        template = require('text!common/views/article/ArticlesCollection.hbs');

    return BaseCollectionView.extend({
        template: template,
        itemViewConstructor: SimpleArticleView
    });
});