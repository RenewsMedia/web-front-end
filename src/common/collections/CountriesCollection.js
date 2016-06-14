define(function(require) {
    var BaseCollection = require('common/base/BaseCollection'),
        CountryModel = require('common/models/CountryModel');

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