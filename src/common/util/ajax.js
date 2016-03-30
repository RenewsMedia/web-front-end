define(function(require) {
    var _ = require('underscore'),
        $ = require('jquery');

    return {
        load: function(params) {
            var defaultOptions = {
                url: '',
                data: {},
                dataType: 'json',
                type: 'get'
            };

            return $.ajax(_.extend({}, defaultOptions, params));
        }
    };
});