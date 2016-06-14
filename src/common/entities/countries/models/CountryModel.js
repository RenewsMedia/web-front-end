define(function(require) {
    var BaseModel = require('common/base/BaseModel');

    return BaseModel.extend({
        defaults: {
            code: '',
            name: '',
            phone_code: ''
        }
    });
});