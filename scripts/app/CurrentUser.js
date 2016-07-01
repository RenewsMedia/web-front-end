/**
 * Current user
 * @module app/CurrentUser
 * @returns {Object}
 */

define(function(require) {
    var UserModel = require('components/user/UserModel');

    var CurrentUser = UserModel.extend({
        login: undefined,

        initialize: function() {
            this.initEvents();
        },

        initEvents: function() {
            this.on('sync', this.onSync);
        },

        onSync: function() {
            this.login = this.get('login');
        }
    });
    
    return new CurrentUser();
});