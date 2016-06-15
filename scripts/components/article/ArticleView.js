define(function(require) {
    var BaseView = require('app/base/BaseView'),
        TagsListView = require('components/tagsList/TagsListView'),

        template = require('text!components/article/Article.hbs');
    
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