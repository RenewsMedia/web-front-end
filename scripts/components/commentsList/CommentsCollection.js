define(function(require) {
    var BaseCollection = require('app/base/BaseCollection'),
        CommentModel = require('components/comment/CommentModel');

    return BaseCollection.extend({
        urlRoot: '/comments',
        model: CommentModel,

        initialize: function(models, options) {
            this.article = options.article;
        },

        url: function() {
            return BaseCollection.prototype.url.apply(this) + '/' + this.article;
        }
    });
});