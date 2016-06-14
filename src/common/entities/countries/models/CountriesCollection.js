define(function(require) {
    var BaseCollection = require('common/util/BaseCollection'),
        CountryModel = require('common/entities/countries/models/CountryModel');

    var CountriesCollection = BaseCollection.extend({
        urlRoot: '/countries',
        model: CountryModel,
        
        initialize: function() {
            this.fetch();
        }
    });
    
    var countriesCollection = new CountriesCollection();
    
    return function() {
        return countriesCollection;
    };
});