define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars');

    return Backbone.View.extend({
        template: '',
        _template: undefined,
        _regions: {},

        hbs: Handlebars,

        getData: function() {
            if (_.isObject(this.model)) {
                return this.model.toJSON();
            } else if (_.isObject(this.collection)) {
                return this.collection.toJSON();
            }
            return {};
        },

        getEl: function() {
            return this.el;
        },

        addRegion: function(name, view) {
            this._regions[name] = view;
            this.listenTo(view, 'render', _.bind(this.appendRegion, this, name));
            view.render();
        },

        addRegions: function(map) {
            _.each(map, function(view, name) {
                this.addRegion(name, view);
            }, this);
        },

        appendRegion: function(name) {
            this._getRegionEl(name).empty()
                .append(this._regions[name].getEl());
        },

        updateRegions: function() {
            _.each(this._regions, function(view, name) {
                this.appendRegion(name);
            }, this);
        },

        render: function() {
            this._template = this._template || this.hbs.compile(this.template);
            this.setElement(this._template(this.getData()));
            this.trigger('render');
            return this;
        },

        _getRegionEl: function(name) {
            return this.$('[data-region="' + name + '"]');
        }
    });
});