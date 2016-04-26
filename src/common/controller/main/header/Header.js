define(function(require) {
    var BaseView = require('BaseView'),

        template = require('text!common/controller/main/header/Header.hbs');
    
    return BaseView.extend({
        template: template
    });
});