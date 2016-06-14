define(function(require) {
    var BaseModel = require('common/util/BaseModel');

    return BaseModel.extend({
        urlRoot: '/channel',

        defaults: {
            owner: 0,
            name: '',
            description: '',
            date_create: 0
        }
    });
});