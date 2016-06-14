define(function(require) {
    var BaseModel = require('common/base/BaseModel');

    return BaseModel.extend({
        urlRoot: '/user',

        defaults: {
            login: '',
            name: '',
            surname: '',
            country: '',
            mail: '',
            verified: false,
            date_reg: 0
        }
    });
});