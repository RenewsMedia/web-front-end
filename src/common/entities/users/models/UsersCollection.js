define(function(require) {
    var BaseCollection = require('common/util/BaseCollection'),
        UserModel = require('common/entities/users/models/UserModel');

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