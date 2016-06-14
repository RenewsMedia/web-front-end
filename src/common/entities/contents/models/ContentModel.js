define(function(require) {
    var BaseModel = require('common/base/BaseModel');

    return BaseModel.extend({
        defaults: {
            type: '',
            article: 0,
            data: {},
            order: 0
        }
    });
});