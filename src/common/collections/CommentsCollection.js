define(function(require) {
    var BaseCollection = require('common/base/BaseCollection'),
        CommentModel = require('common/models/CommentModel');

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