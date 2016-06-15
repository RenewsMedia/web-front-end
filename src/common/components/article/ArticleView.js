define(function(require) {
    var BaseView = require('common/util/BaseView'),
        TagsListView = require('common/components/tagsList/TagsListView'),

        template = require('text!common/components/article/Article.hbs');
    
    return BaseView.extend({
        template: template,

        initialize: function() {
            this.tags = new TagsListView({
                collection: this.model.tags
            });

            this.addRegions({
                'tags': this.tags
            });
        }
    });
});