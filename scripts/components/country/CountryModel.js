define(function(require) {
    var BaseModel = require('app/base/BaseModel');

    return BaseModel.extend({
        defaults: {
            code: '',
            name: '',
            phone_code: ''
        }
    });
});