define(function(require) {
    var BaseCollectionView = require('common/base/BaseCollectionView'),
        SimpleArticleView = require('common/views/articles/SimpleArticleView'),

        template = require('text!common/views/articles/templates/ArticlesCollection.hbs');

    return BaseCollectionView.extend({
        template: template,
        itemViewConstructor: SimpleArticleView
    });
});