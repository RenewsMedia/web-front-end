define(function(require) {
    var BasePageController = require('app/base/BasePageController'),
        Header = require('pages/main/header/Header'),

        template = require('text!pages/main/Main.hbs');

    return BasePageController.extend({
        template: template,
        
        initialize: function() {
            this.header = new Header();
            
            this.addRegions({
                'main-header': this.header
            });
        }
    });
});