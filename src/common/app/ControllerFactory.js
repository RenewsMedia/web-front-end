define(function(require) {
    var _ = require('underscore'),
        controllers = {
            main: require('common/pages/main/Main')
        };

    var DEFAULT_CONTROLLER = 'main';

    var ControllerFactory = {
        getConstructor: function(name) {
            name = name.toLowerCase() || DEFAULT_CONTROLLER;
            if (!_.has(controllers, name)) {
                throw new Error('Controller [' + name + '] does not exists!');
            }
            return controllers[name];
        },

        prepareParams: function(name, params) {
            return ControllerFactory.getConstructor(name).prepareParams(params);
        }
    };

    return ControllerFactory;
});