define(function(require) {
    var BaseCollection = require('app/base/BaseCollection'),
        CountryModel = require('components/country/CountryModel');

    var CountriesCollection = BaseCollection.extend({
        url: '/countries',
        model: CountryModel,
        
        initialize: function() {
            this.fetch();
        }
    });
    
    return new CountriesCollection();
});