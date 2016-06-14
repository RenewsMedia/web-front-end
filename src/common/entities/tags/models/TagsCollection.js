define(function(require) {
    var BaseCollection = require('common/util/BaseCollection'),
        TagModel = require('common/entities/tags/models/TagModel');

    return BaseCollection.extend({
        urlRoot: '/tags',
        model: TagModel
    });
});