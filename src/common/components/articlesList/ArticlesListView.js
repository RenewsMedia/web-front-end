define(function(require) {
    var BaseCollectionView = require('common/util/BaseCollectionView'),
        ArticlePreview = require('common/components/articlePreview/ArticlePreview'),

        template = require('text!common/components/articlesList/ArticlesList.hbs');

    return BaseCollectionView.extend({
        template: template,
        itemViewConstructor: ArticlePreview
    });
});