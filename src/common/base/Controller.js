define(function(require) {
    var BaseView = require('common/base/View');

    return BaseView.extend({}, {
        prepareParams: function(params) {
            return {};
        }
    });
});