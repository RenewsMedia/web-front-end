define(function(require) {
    var BaseCollectionView = require('common/util/BaseCollectionView'),
        TagView = require('common/entities/tags/views/TagView'),

        template = require('text!common/entities/tags/templates/TagsCollection.hbs');

    return BaseCollectionView.extend({
        template: template,
        itemViewConstructor: TagView
    });
});