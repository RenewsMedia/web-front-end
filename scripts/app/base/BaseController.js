define(function(require) {
    var BaseView = require('app/base/BaseView');

    return BaseView.extend({
        setElement: function() {
            BaseView.prototype.setElement.apply(this, arguments);
            this.render();
        },

        render: function() {
            this._template = this._template || this.hbs.compile(this.template);
            this.$el.empty().append(this._template(this.getData()));
            this.updateRegions();
            this.trigger('render', this);
        }
    }, {
        prepareParams: function() {
            return {};
        }
    });
});