define(function(require) {
    var BaseModel = require('app/base/BaseModel');

    return BaseModel.extend({
        defaults: {
            type: '',
            article: 0,
            data: '',
            order: 0
        }
    });
});