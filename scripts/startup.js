define(function(require) {
    var $ = require('jquery'),
        App = require('app/App');

    require('preprocessor');
    
    $(function() {
        new App({
            el: 'body'
        });
    });
});