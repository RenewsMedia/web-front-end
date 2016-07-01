/**
 * Page controllers factory
 * @module app/ControllerFactory
 * @returns {Object}
 */

define(function(require) {
    var _ = require('underscore'),
        controllers = {
            main: require('pages/main/Main'),
            article: require('pages/article/Article'),
            sign: require('pages/sign/Sign')
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