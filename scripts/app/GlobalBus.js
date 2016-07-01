/**
 * Global application bus
 * @module app/GlobalBus
 * @returns {Object} - instance of global application bus
 */

define(function(require) {
    var BaseClass = require('app/base/BaseClass');
    
    var GlobalBus = BaseClass.extend({
        redirect: function(url) {
            this.trigger('redirect', url);
        }
    });
    
    return new GlobalBus();
});