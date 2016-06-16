define(function(require) {
    var BaseController = require('app/base/BaseController'),

        Module = require(''),

        template = require('text!pages/dev/Dev.hbs');

    var options = {};

    return BaseController.extend({
        template: template,

        initialize: function() {
            this.addRegions({
                output: new Module(options)
            });
        }
    });
});