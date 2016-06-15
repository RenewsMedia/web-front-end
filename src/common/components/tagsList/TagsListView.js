define(function(require) {
    var BaseCollectionView = require('common/util/BaseCollectionView'),
        TagView = require('common/components/tag/TagView'),

        template = require('text!common/components/tagsList/TagsList.hbs');

    return BaseCollectionView.extend({
        template: template,
        itemViewConstructor: TagView
    });
});