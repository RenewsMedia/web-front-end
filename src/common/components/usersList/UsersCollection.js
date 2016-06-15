define(function(require) {
    var BaseCollection = require('common/util/BaseCollection'),
        UserModel = require('common/components/user/UserModel');

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