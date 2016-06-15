define(function(require) {
    var $ = require('jquery'),
        App = require('app/App');

    $(function() {
        new App({
            el: 'body'
        });
    });
});