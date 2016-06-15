define(function(require) {
    var BaseCollectionView = require('app/base/BaseCollectionView'),
        TagView = require('components/tag/TagView'),

        template = require('text!components/tagsList/TagsList.hbs');

    return BaseCollectionView.extend({
        template: template,
        itemViewConstructor: TagView
    });
});