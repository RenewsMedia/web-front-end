define(function(require) {
    var BaseCollectionView = require('common/base/BaseCollectionView'),
        TagView = require('common/views/tags/TagView'),

        template = require('text!common/views/tags/templates/TagsCollection.hbs');

    return BaseCollectionView.extend({
        template: template,
        itemViewConstructor: TagView
    });
});