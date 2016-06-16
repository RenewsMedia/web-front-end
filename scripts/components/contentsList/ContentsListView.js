define(function(require) {
    var BaseCollectionView = require('app/base/BaseCollectionView'),
        ContentViewsFactory = require('components/content/ContentViewsFactory'),

        template = require('text!components/contentsList/ContentsList.hbs');

    return BaseCollectionView.extend({
        template: template,
        itemViewConstructor: ContentViewsFactory
    });
});