define(function(require) {
    var BaseCollection = require('app/base/BaseCollection'),
        UserModel = require('components/user/UserModel');

    return BaseCollection.extend({
        urlRoot: '/users',
        model: UserModel,

        search: function(query) {
            this.fetch({
                data: {
                    query: query
                }
            });
        }
    });
});