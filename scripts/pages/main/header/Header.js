define(function(require) {
    var BaseView = require('app/base/BaseView'),

        template = require('text!pages/main/header/Header.hbs');
    
    return BaseView.extend({
        template: template
    });
});