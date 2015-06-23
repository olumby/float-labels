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

    //
    // Variables
    //
    var floatLabels = {}; // Object for public APIs
    var supports = !!document.querySelector && !!root.addEventListener; // Feature test
    var settings; // Placeholder variables

    // Default settings
    var defaults = {
        someVar: 123,
        initClass: 'js-floatLabels',
        callbackBefore: function() {},
        callbackAfter: function() {}
    };


    var extend = function(){
        for(var i=1; i<arguments.length; i++)
            for(var key in arguments[i])
                if(arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];
        return arguments[0];
    }


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
        settings = extend({}, defaults, options);

        Array.prototype.forEach.call(document.getElementsByClassName('float-label'), function(el) {
            var element = el.getElementsByTagName('input')[0]
            element.classList.add('float-label-js');
            element.setAttribute('data-content', element.value);
            element.onkeyup = function () {
                this.setAttribute('data-content', this.value);
            }
        });
    };


    //
    // Public APIs
    //

    return floatLabels;

});
