define(function(require) {
    var BaseCollection = require('app/base/BaseCollection'),
        ContentModel = require('components/content/ContentModel');

    return BaseCollection.extend({
        model: ContentModel
    });
});