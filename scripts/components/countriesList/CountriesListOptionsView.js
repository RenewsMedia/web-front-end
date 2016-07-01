define(function(require) {
    var _ = require('underscore'),
        BaseView = require('app/base/BaseCollectionView'),

        template = require('text!components/countriesList/CountriesListOptions.hbs');

    return BaseView.extend({
        template: template,

        initialize: function(options) {
            this.selectName = options.name || 'country';
        },

        getData: function() {
            return _.extend(BaseView.prototype.getData.apply(this, arguments), {
                name: this.selectName
            });
        }
    });
});