define(function(require) {
    var AuthManager = require('app/AuthManager'),
        FormView = require('components/forms/FormView'),
        CountriesCollection = require('components/countriesList/CountriesCollection'),
        CountriesListOptionsView = require('components/countriesList/CountriesListOptionsView'),

        template = require('text!components/authForms/signUp/SignUpForm.hbs');

    return FormView.extend({
        template: template,
        
        initialize: function() {
            this.addRegions({
                countries: new CountriesListOptionsView({
                    collection: CountriesCollection
                })
            });
            FormView.prototype.initialize.apply(this, arguments);
        },

        onSubmit: function(e) {
            e.preventDefault();
            AuthManager.signUp(this.serialize());
        }
    });
});