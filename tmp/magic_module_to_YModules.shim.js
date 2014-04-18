/**
 * @param    {Object}    window     Link to window
 * @param    {Object}    document   Link to document
 * @param    {Object}    modules    Link to models system
 */
(function ( window, document, modules ) {
    'use strict';

    var
        moduleRealization = function( provide, a, b, c ) {

            /**
             * Module body
             */
            var
    magicModule = (function() {
        var
            doubleNum = function( num ) {
                if ( typeof num === 'number' ) {
                    return num * num;
                } else {
                    return 0;
                }
            },

            magic = function( num ) {
                var
                    d = doubleNum(num);
                // end of vars
                
                return d;
            };
        // end of vars

        return {
            magic: magic
        }
    }());
// end of module

            provide(magicModule)
        };
    // end of module realization

    /**
     * Module with magic realization
     * 
     * @module      magicModule
     */
    modules.define(
        // Module name
        'magicModule',

        // Dependies
        ['aModule', 'bModule', 'cModule'],
        
        // Module realization
        moduleRealization
    );

}(
    this,
    this.document,
    this.modules
));