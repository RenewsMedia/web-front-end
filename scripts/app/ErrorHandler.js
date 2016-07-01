/**
 * Global error handler
 * @module app/ErrorHandler
 * @returns {Object}
 */

define(function(require) {
    var _ = require('underscore'),
        BaseClass = require('app/base/BaseClass');
    
    var _handlers = {
        AuthRequires: function(e) {
            console.log(e.toString());
        },

        OnlyForGuests: function(e) {
            console.log(e.toString());
        },

        default: function(e) {
            console.log(e.toString());
        }
    };
    
    return BaseClass.extend({
        handle: function() {
            var e = arguments[4],
                handler = 'default';

            if (_.has(_handlers, e.name)) {
                handler = e.name;
            }

            _handlers[handler].call(this, e);

            return true;
        }
    });
});