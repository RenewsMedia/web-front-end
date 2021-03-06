define(function(require) {
    var BaseModel = require('app/base/BaseModel'),
        UserModel = require('components/user/UserModel');

    return BaseModel.extend({
        defaults: {
            ref_id: 0,
            author: 0,
            data: {},
            published: 0
        },

        initialize: function() {
            this.author = new UserModel({
                id: this.get('author')
            });

            this.initEvents();
        },

        initEvents: function() {
            this.on('change:author', this.fetchAuthor);
        },

        fetchAuthor: function() {
            this.author.set('id', this.get('author'));
            this.author.fetch();
        }
    });
});