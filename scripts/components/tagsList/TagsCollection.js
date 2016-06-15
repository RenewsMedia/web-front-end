define(function(require) {
    var BaseCollection = require('app/base/BaseCollection'),
        TagModel = require('components/tag/TagModel');

    return BaseCollection.extend({
        urlRoot: '/tags',
        model: TagModel
    });
});