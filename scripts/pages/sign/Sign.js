define(function(require) {
    var _ = require('underscore'),
        _window = require('app/util/_window'),
        AuthManager = require('app/AuthManager'),
        BasePageController = require('app/base/BasePageController'),
        SignInFormView = require('components/authForms/signIn/SignInFormView'),
        SignUpFormView = require('components/authForms/signUp/SignUpFormView'),
        CurrentUser = require('app/CurrentUser'),

        AuthRequired = require('exceptions/AuthRequired'),
        OnlyForGuests = require('exceptions/OnlyForGuests'),
        
        template = require('text!pages/sign/Sign.hbs');
    
    return BasePageController.extend({
        template: template,

        initialize: function(options) {
            var FormViewConstructor = SignInFormView;
            this.signType = options.signType;

            if (this.signType === 'out') {
                return this.signOut();
            }

            if (CurrentUser.login) {
                throw new OnlyForGuests();
            }

            if (this.signType === 'up') {
                FormViewConstructor = SignUpFormView;
            }

            this.addRegions({
                form: new FormViewConstructor()
            });
        },

        signOut: function() {
            if (!CurrentUser.login) {
                throw new AuthRequired();
            }

            AuthManager.signOut()
                .then(_.bind(this.onSignOut, this));
        },

        onSignOut: function(result) {
            if (result) {
                _window.location.reload();
            }
        }
    }, {
        prepareParams: function(params) {
            return {
                signType: params[0]
            };
        }
    });
});