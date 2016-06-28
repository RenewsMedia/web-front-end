define(function(require) {
    var _ = require('underscore'),
        BaseView = require('app/base/BaseView');

    return BaseView.extend({
        itemViewConstructor: BaseView,

        initialize: function() {
            this.prepareItems();
            this.initEvents();
        },

        initEvents: function() {
            this.listenTo(this.collection, 'change reset add remove', this.prepareItems);
        },

        prepareItems: function() {
            this.items = _.map(this.collection.models, this.createItemView, this);
        },

        createItemView: function(model) {
            var view = new this.itemViewConstructor({
                model: model
            });
            view.render();

            return view;
        },

        render: function() {
            this._template = this._template || this.hbs.compile(this.template);
            this.setElement(this._template(this.getData()));
            this.renderItems();
            this.trigger('render');
            return this;
        },

        renderItems: function() {
            this.$el.empty();
            _.each(this.items, this.appendItem, this);
        },

        appendItem: function(item) {
            this.$el.append(item.getEl());
        }
    });
});