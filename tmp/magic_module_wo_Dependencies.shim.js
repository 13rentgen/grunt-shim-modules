/**
 * @param    {Object}    window     Link to window
 * @param    {Object}    document   Link to document
 * @param    {Object}    define     Define module
 */
(function ( window, document, define ) {
    'use strict';

    var
        moduleRealization = function(  ) {

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

            return magicModule;
        };
    // end of module realization

    /**
     * Module with magic realization
     * 
     * @module      magicModule
     */
    define(
        // Module name
        'magicModule',

        // Dependies
        [],
        
        // Module realization
        moduleRealization
    );

}(
    this,
    this.document,
    this.define
));