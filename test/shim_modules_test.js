'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.shim_modules = {
  setUp: function ( done ) {
    // setup here if necessary
    done();
  },

  magic_module: function ( test ) {
    test.expect(1);

    var actual = grunt.file.read('tmp/magic_module.shim.js');
    var expected = grunt.file.read('test/expected/magic_module.js');
    test.equal(actual, expected, 'require js module created');

    test.done();
  },

  magic_module_wo_Dependencies: function ( test ) {
    test.expect(1);

    var actual = grunt.file.read('tmp/magic_module_wo_Dependencies.shim.js');
    var expected = grunt.file.read('test/expected/magic_module_wo_Dependencies.js');
    test.equal(actual, expected, 'require js module without dependecies created');

    test.done();
  },

  magic_module_to_YModules: function ( test ) {
    test.expect(1);

    var actual = grunt.file.read('tmp/magic_module_to_YModules.shim.js');
    var expected = grunt.file.read('test/expected/magic_module_to_YModules.js');
    test.equal(actual, expected, 'ymodules js module created');

    test.done();
  }
};
