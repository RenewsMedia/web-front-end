define(function(require) {
    var BaseCollectionView = require('common/base/BaseCollectionView'),
        SimpleArticleView = require('common/entities/articles/views/SimpleArticleView'),

        template = require('text!common/entities/articles/templates/ArticlesCollection.hbs');

    return BaseCollectionView.extend({
        template: template,
        itemViewConstructor: SimpleArticleView
    });
});