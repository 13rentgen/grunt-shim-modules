# grunt-shim-modules [![Build Status](https://travis-ci.org/13rentgen/grunt-shim-modules.svg?branch=master)](https://travis-ci.org/13rentgen/grunt-shim-modules)

> Shim files as modules by template

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-shim-modules --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-shim-modules');
```

## The "shim_modules" task

### Overview
In your project's Gruntfile, add a section named `shim_modules` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  shim_modules: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.template
Type: `String`

Path to template

#### options.importNonFirst
Type: `Boolean`
Default: False

If importing dependencies including not first (like in YModules, for example)

#### options.src
Type: `String`

Path to file

#### options.dest
Type: `String`

Destination path

#### options.module_name
Type: `String`

Your module name

#### options.desc
Type: `String`
Default: null

Your module description

#### options.exports
Type: `String`
Default: null

Your module export

#### options.dependencies
Type: `Array`
Default: []

Your module array of dependencies

### Usage Examples


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Alexandr Zaytcev. Licensed under the MIT license.
