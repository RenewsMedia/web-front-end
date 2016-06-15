define(function(require) {
    var BaseCollectionView = require('app/base/BaseCollectionView'),
        ArticlePreview = require('components/articlePreview/ArticlePreview'),

        template = require('text!components/articlesList/ArticlesList.hbs');

    return BaseCollectionView.extend({
        template: template,
        itemViewConstructor: ArticlePreview
    });
});