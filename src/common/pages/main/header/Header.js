define(function(require) {
    var BaseView = require('BaseView'),

        template = require('text!common/pages/main/header/Header.hbs');
    
    return BaseView.extend({
        template: template
    });
});