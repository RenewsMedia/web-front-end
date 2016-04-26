define(function(require) {
    var BaseController = require('common/base/BaseController'),
        Header = require('common/controller/main/header/Header'),

        template = require('text!common/controller/main/Main.hbs');

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