/**
 * Global error handler
 * @module app/ErrorHandler
 * @returns {Object}
 */

define(function(require) {
    var _ = require('underscore'),
        BaseClass = require('app/base/BaseClass'),
        GlobalBus = require('app/GlobalBus');
    
    var _handlers = {
        AuthRequired: function() {
            GlobalBus.redirect('/sign/in');
        },

        OnlyForGuests: function() {
            GlobalBus.redirect('/');
        }
    };
    
    var ErrorHandler = BaseClass.extend({
        handle: function() {
            var e = arguments[0];
            if (arguments.length > 1) {
                e = arguments[4];
            }

            if (_.has(_handlers, e.name)) {
                _handlers[e.name].call(this, e);
                return true;
            }
        }
    });
    
    return new ErrorHandler();
});