define(function(require) {
    var BaseCollection = require('common/util/BaseCollection'),
        ContentModel = require('common/components/content/ContentModel');

    return BaseCollection.extend({
        model: ContentModel
    });
});