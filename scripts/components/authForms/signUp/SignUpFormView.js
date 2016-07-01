define(function(require) {
    var AuthManager = require('app/AuthManager'),
        FormView = require('components/forms/FormView'),

        template = require('text!components/authForms/signUp/SignUpForm.hbs');

    return FormView.extend({
        template: template,

        onSubmit: function(e) {
            e.preventDefault();
            AuthManager.signIn(this.serialize());
        }
    });
});