/**
 * Base class
 * @abstract
 * @module app/base/BaseClass
 * @returns {Object} - base class constructor
 */

define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone');

    var BaseClass =  function(options) {
        this.initialize(options);
    };

    _.extend(BaseClass.prototype, Backbone.Events, {
        initialize: function() {}
    });

    // Static props
    _.extend(BaseClass, {
        extend: function(protoProps, staticProps) {
            var parent = this;
            var child;

            if (protoProps && _.has(protoProps, 'constructor')) {
                child = protoProps.constructor;
            } else {
                child = function(){ return parent.apply(this, arguments); };
            }

            _.extend(child, parent, staticProps);

            child.prototype = _.create(parent.prototype, protoProps);
            child.prototype.constructor = child;

            child.__super__ = parent.prototype;

            return child;
        }
    });

    return BaseClass;
});