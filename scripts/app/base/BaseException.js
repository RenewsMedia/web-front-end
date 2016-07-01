/**
 * Base exception
 * @abstract
 * @module app/base/BaseException
 * @returns {Object}
 */

define(function(require) {
    var BaseClass = require('app/base/BaseClass');

    return BaseClass.extend({
        name: 'BaseException',
        message: undefined,
        stack: undefined,

        constructor: function(message) {
            this.message = message || this.message;
            this.stack = (new Error()).stack;
        },
        
        toString: function() {
            return this.name + (this.message ? ': ' + this.message : '');
        }
    });
});