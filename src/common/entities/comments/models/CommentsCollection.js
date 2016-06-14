define(function(require) {
    var BaseCollection = require('common/util/BaseCollection'),
        CommentModel = require('common/entities/comments/models/CommentModel');

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