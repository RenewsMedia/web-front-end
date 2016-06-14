define(function(require) {
    var BaseCollection = require('common/util/BaseCollection'),
        ContentModel = require('common/entities/contents/models/ContentModel');

    return BaseCollection.extend({
        model: ContentModel
    });
});