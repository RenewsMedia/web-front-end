define(function(require) {
    var _ = require('underscore'),
        viewsMap = {
            text: require('components/content/views/text/TextView'),
            cite: require('components/content/views/cite/CiteView')
        };

    var getViewByType = function(type) {
        if (!_.has(viewsMap, type)) {
            throw new TypeError('Unknown content type');
        }
        return viewsMap[type];
    };

    return function(options) {
        var View = getViewByType(options.model.get('type'));
        return new View(options);
    };
});