define(function(require) {
    var BaseView = require('common/base/BaseView'),
        TagsCollectionView = require('common/views/tags/TagsCollectionView'),

        template = require('text!common/views/articles/templates/Article.hbs');
    
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