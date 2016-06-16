define(function(require) {
    var BaseView = require('app/base/BaseView');
    
    return BaseView.extend({
        getData: function() {
            return this.model.get('data');
        }
    });
});