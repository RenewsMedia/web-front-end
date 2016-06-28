define(function(require) {
    var BaseModel = require('app/base/BaseModel'),
        UserModel = require('components/user/UserModel'),
        ChannelModel = require('components/channel/ChannelModel'),
        TagsCollection = require('components/tagsList/TagsCollection'),
        ContentsCollection = require('components/contentsList/ContentsCollection');

    return BaseModel.extend({
        urlRoot: '/article',

        defaults: {
            channel: 0,
            author: 0,
            title: '',
            created: 0,
            published: 0,
            hidden: false,
            contents: [],
            tags: []
        },

        initialize: function() {
            this.author = new UserModel({
                id: this.get('author')
            });

            this.channel = new ChannelModel({
                id: this.get('channel')
            });

            this.contents = new ContentsCollection(this.get('contents'));
            this.tags = new TagsCollection(this.get('tags'));

            this.set({
                contents: this.contents,
                tags: this.tags
            });

            this.initEvents();
        },

        initEvents: function() {
            this.on('change:contents', this.resetCollections);
            this.on('change:tags', this.resetCollections);

            this.on('change:author', this.fetchAuthor);
            this.on('change:channel', this.fetchChannel);

            this.listenTo(this.contents, 'change reset add remove', this.syncContents);
            this.listenTo(this.tags, 'change reset add remove', this.syncTags);
        },

        resetCollections: function() {
            this.contents.reset(this.get('contents'));
            this.tags.reset(this.get('tags'));
        },

        fetchAuthor: function() {
            this.author.set('id', this.get('author'));
            this.author.fetch();
        },

        fetchChannel: function() {
            this.channel.set('id', this.get('channel'));
            this.channel.fetch();
        },

        syncContents: function() {
            this.set('contents', this.contents.toJSON());
        },

        syncTags: function() {
            this.set('tags', this.tags.toJSON());
        }
    });
});