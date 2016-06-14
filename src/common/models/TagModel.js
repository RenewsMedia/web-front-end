define(function(require) {
    var BaseModel = require('common/base/BaseModel');

    return BaseModel.extend({
        defaults: {
            status: 'new'
        }
    });
});