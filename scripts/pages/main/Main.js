define(function(require) {
    var BasePageController = require('app/base/BasePageController'),

        template = require('text!pages/main/Main.hbs');

    return BasePageController.extend({
        template: template
    });
});