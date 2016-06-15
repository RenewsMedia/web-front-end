define(function(require) {
    var BaseModel = require('common/util/BaseModel');

    return BaseModel.extend({
        defaults: {
            code: '',
            name: '',
            phone_code: ''
        }
    });
});