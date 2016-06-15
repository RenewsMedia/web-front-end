define(function(require) {
    var BaseCollection = require('common/util/BaseCollection'),
        TagModel = require('common/components/tag/TagModel');

    return BaseCollection.extend({
        urlRoot: '/tags',
        model: TagModel
    });
});