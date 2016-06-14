define(function(require) {
    var BaseCollection = require('common/base/BaseCollection'),
        ContentModel = require('common/models/ContentModel');

    return BaseCollection.extend({
        model: ContentModel
    });
});