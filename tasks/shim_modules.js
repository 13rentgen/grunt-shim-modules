/*
 * grunt-shim-modules
 * 
 *
 * Copyright (c) 2014 Alexandr Zaytcev
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function ( grunt ) {
    grunt.registerMultiTask('shim_modules', 'Shim files as modules by template', function () {

        // Merge task-specific and/or target-specific options with these defaults.
        var
            options = this.options({
                punctuation: ' ',
                separator: ', '
            }),

            getSource = function( file ) {
                // Concat specified files.
                var
                    source = file.src.filter(function ( filepath ) {
                        // Warn on and remove invalid source files (if nonull was set).
                        if (!grunt.file.exists(filepath)) {
                            grunt.log.warn('Source file "' + filepath + '" not found.');
                            return false;
                        } else {
                            return true;
                        }
                    }).map(function ( filepath ) {
                        // Read file source.
                        return grunt.file.read(filepath);
                    }).join(grunt.util.normalizelf(options.separator));

                return source;
            },

            getDependencies = function( dep ) {
                var
                    str = '',
                    i;
                // end of vars

                if ( !dep.length ) {
                    return null;
                }

                for ( i = 0; i < dep.length; i++ ) {
                    str += '\'' + dep[i] + '\'';

                    if ( i + 1 !== dep.length ) {
                        str += options.separator;
                    }
                }

                return str;
            },

            getImportDependencies = function( dep, importNonFirst ) {
                var
                    str = (importNonFirst) ? options.separator : '',
                    i;
                // end of vars

                if ( !dep.length ) {
                    return null;
                }

                for ( i = 0; i < dep.length; i++ ) {
                    str += dep[i];

                    if ( i + 1 !== dep.length ) {
                        str += options.separator;
                    }
                }

                return str;
            },

            template = grunt.file.read(options.template);
        // end of vars


        // Iterate over all specified file groups.
        this.files.forEach(function ( file ) {
            var
                src = getSource(file),
                data,
                newSource;
            // end of vars

            data = {
                module_code: src,
                module_name: file.module_name,
                exports: file.exports || null,
                desc: file.desc || null,
                dependencies: getDependencies(file.dependencies || []),
                import_dependencies: getImportDependencies(file.dependencies || [], options.importNonFirst || false)
            };

            newSource = grunt.template.process(template, {data: data});

            // Write the destination file.
            grunt.file.write(file.dest, newSource);

            // Print a success message.
            grunt.log.writeln('File "' + file.dest + '" created.');
        });
    });

};