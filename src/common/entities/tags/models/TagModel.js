define(function(require) {
    var BaseModel = require('common/util/BaseModel');

    return BaseModel.extend({
        defaults: {
            status: 'new'
        }
    });
});