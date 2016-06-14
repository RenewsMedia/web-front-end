define(function(require) {
    var $ = require('jquery'),
        App = require('common/app/App');

    $(function() {
        new App({
            el: 'body'
        });
    });
});