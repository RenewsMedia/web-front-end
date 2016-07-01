/**
 * Base collection view
 * @abstract
 * @module app/base/BaseCollectionView
 * @returns {Object}
 */

define(function(require) {
    var _ = require('underscore'),
        BaseView = require('app/base/BaseView');

    return BaseView.extend({
        itemViewConstructor: undefined,

        initialize: function() {
            this.prepareItems();
            this.initEvents();
        },

        initEvents: function() {
            this.listenTo(this.collection, 'change reset add remove', this.prepareItems);
        },

        prepareItems: function() {
            if (!this.itemViewConstructor) {
                return;
            }
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
            if (this.itemViewConstructor) {
                this.renderItems();
            }
            this.trigger('render');
            this.delegateEvents();
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