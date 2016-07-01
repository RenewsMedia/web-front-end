define(function(require) {
    var BaseException = require('app/base/BaseException');
    
    return BaseException.extend({
        name: 'AuthRequired'
    });
});