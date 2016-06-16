define(function(require) {
    var BaseContentView = require('components/content/BaseContentView'),

        template = require('text!components/content/views/text/Text.hbs');

    return BaseContentView.extend({
        template: template
    });
});