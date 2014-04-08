/**
 * @param    {Object}    window     Link to window
 * @param    {Object}    document   Link to document
 * @param    {Object}    define     Define module
 */
(function ( window, document, define ) {
    'use strict';

    var
        moduleRealization = function( <%= import_dependencies %> ) {

            /**
             * Module body
             */
            <%= module_code %>

            return <%= exports %>;
        };
    // end of module realization

    /**
     * <%= desc %>
     * 
     * @module      <%= module_name %>
     */
    define(
        // Module name
        '<%= module_name %>',

        // Dependies
        [<%= dependencies %>],
        
        // Module realization
        moduleRealization
    );

}(
    this,
    this.document,
    this.define
));