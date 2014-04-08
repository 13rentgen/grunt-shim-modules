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