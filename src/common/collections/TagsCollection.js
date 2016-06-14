define(function(require) {
    var BaseCollection = require('common/base/BaseCollection'),
        TagModel = require('common/models/TagModel');

    return BaseCollection.extend({
        urlRoot: '/tags',
        model: TagModel
    });
});