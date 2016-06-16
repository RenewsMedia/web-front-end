define(function(require) {
    var _ = require('underscore'),
        BaseView = require('app/base/BaseView');

    return BaseView.extend({
        itemViewConstructor: BaseView,

        initialize: function() {
            this.items = _.map(this.collection.models, this.createItemView);

            this.initEvents();
        },

        initEvents: function() {
            this.on('render', this.renderItems);

            this.listenTo(this.collection, 'change reset add remove');
        },

        createItemView: function(model) {
            var view = new this.itemViewConstructor({
                model: model
            });
            view.render();

            return view;
        },

        renderItems: function() {
            this.$el.empty();
            _.each(this.items, this.appendItem);
        },

        appendItem: function(item) {
            this.$el.append(item.getEl());
        }
    });
});