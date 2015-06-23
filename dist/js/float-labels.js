(function (root, factory) {
    if ( typeof define === 'function' && define.amd ) {
        define([], factory(root));
    } else if ( typeof exports === 'object' ) {
        module.exports = factory(root);
    } else {
        root.floatLabels = factory(root);
    }
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {

    'use strict';

    var floatLabels = {}; // Object for public APIs
    var supports = !!document.querySelector && !!root.addEventListener; // Feature test
    var settings; // Placeholder variables

    // Default settings
    var defaults = {
        selector: '.float-label',
        jsClass: 'float-label-js', // needs to be same as CSS
        contentAttr: 'data-content'
    };

    var extend = function(){
        for(var i=1; i<arguments.length; i++)
            for(var key in arguments[i])
                if(arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];
        return arguments[0];
    }

    /**
     * Set content attribute
     * @private
     * @param  {Event} event
     */
    var setContent = function(event) {
        event.target.setAttribute(defaults.contentAttr, event.target.value);
    };

    /**
     * Add event listeners for float labels
     * @private
     * @param  {Element} el
     */
    var setupFloatLabel = function(el) {
        el.classList.add(defaults.jsClass);
        el.querySelector('input').setAttribute(defaults.contentAttr, "");
        el.addEventListener('keyup', setContent, false);
    };

    /**
     * Destroy the current initialization.
     * @public
     */
    floatLabels.destroy = function() {
        // If plugin isn't already initialized, stop
        if (!settings) return;
        // Reset variables
        settings = null;
    };

    /**
     * Initialize Float Labels
     * @public
     * @param {Object} options User settings
     */
    floatLabels.init = function(options) {
        // feature test
        if (!supports) return;
        // Destroy any existing initializations
        floatLabels.destroy();
        // Merge user options with defaults
        settings = extend(defaults, options);

        Array.prototype.forEach.call(document.querySelectorAll(defaults.selector), function(el) {
            setupFloatLabel(el);
        });
    };

    return floatLabels;
});
