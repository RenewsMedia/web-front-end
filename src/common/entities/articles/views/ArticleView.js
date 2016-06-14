define(function(require) {
    var BaseView = require('common/util/BaseView'),
        TagsCollectionView = require('common/entities/tags/views/TagsCollectionView'),

        template = require('text!common/entities/articles/templates/Article.hbs');
    
    return BaseView.extend({
        template: template,

        initialize: function() {
            this.tags = new TagsCollectionView({
                collection: this.model.tags
            });

            this.addRegions({
                'tags': this.tags
            });
        }
    });
});