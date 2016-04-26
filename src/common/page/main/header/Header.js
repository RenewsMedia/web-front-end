define(function(require) {
    var BaseView = require('BaseView'),

        template = require('text!common/page/main/header/Header.hbs');
    
    return BaseView.extend({
        template: template
    });
});