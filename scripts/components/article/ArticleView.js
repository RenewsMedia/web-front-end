define(function(require) {
    var BaseView = require('app/base/BaseView'),
        TagsListView = require('components/tagsList/TagsListView'),
        ContentsListView = require('components/contentsList/ContentsListView'),

        template = require('text!components/article/Article.hbs');
    
    return BaseView.extend({
        template: template,

        initialize: function() {
            this.tags = new TagsListView({
                collection: this.model.tags
            });
            
            this.contents = new ContentsListView({
                collection: this.model.contents
            });

            this.addRegions({
                contents: this.contents,
                tags: this.tags
            });
        }
    });
});