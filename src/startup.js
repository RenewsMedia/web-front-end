define(function(require) {
    var $ = require('jquery'),
        App = require('common/App');

    $(function() {
        new App({
            el: 'body'
        });
    });
});