define(function(require) {
    var BaseController = require('app/base/BaseController'),
        Header = require('pages/main/header/Header'),

        template = require('text!pages/main/Main.hbs');

    return BaseController.extend({
        template: template,
        
        initialize: function() {
            this.header = new Header();
            
            this.addRegions({
                'main-header': this.header
            });
        }
    });
});