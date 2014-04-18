/*
 * grunt-shim-modules
 * 
 *
 * Copyright (c) 2014 Alexandr Zaytcev
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    // load all npm grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        shim_modules: {
            options: {
                template: 'require-module_template.tpl',
            },

            magic_module: {
                src: 'example_module/magic_module.js',
                dest: 'tmp/magic_module.shim.js',
                module_name: 'magicModule',
                desc: 'Module with magic realization',
                exports: 'magicModule',
                dependencies: ['a', 'b', 'c']
            },

            magic_module_wo_Dependencies: {
                src: 'example_module/magic_module.js',
                dest: 'tmp/magic_module_wo_Dependencies.shim.js',
                module_name: 'magicModule',
                desc: 'Module with magic realization',
                exports: 'magicModule'
            },

            magic_module_to_YModules: {
                options: {
                    template: 'ymodules-module_template.tpl',
                    importNonFirst: true
                },

                src: 'example_module/magic_module.js',
                dest: 'tmp/magic_module_to_YModules.shim.js',
                module_name: 'magicModule',
                desc: 'Module with magic realization',
                exports: 'magicModule',
                dependencies: ['aModule', 'bModule', 'cModule'],
                importDependencies: ['a', 'b', 'c']
            },

            // Underscore has special character
            underscore: {
                options: {
                    template: 'ymodules-module_template.tpl',
                    importNonFirst: true
                },

                src: 'example_module/underscore.js',
                dest: 'tmp/underscore.shim.js',
                module_name: 'underscore',
                desc: 'Underscore.js 1.6.0',
                exports: '_'
            },
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'shim_modules', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};