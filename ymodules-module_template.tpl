/**
 * @param    {Object}    window     Link to window
 * @param    {Object}    document   Link to document
 * @param    {Object}    modules    Link to models system
 */
(function ( window, document, modules ) {
    'use strict';

    var
        moduleRealization = function( provide<%= import_dependencies %> ) {

            /**
             * Module body
             */
            <%= module_code %>

            provide(<%= exports %>)
        };
    // end of module realization

    /**
     * <%= desc %>
     * 
     * @module      <%= module_name %>
     */
    modules.define(
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
    this.modules
));