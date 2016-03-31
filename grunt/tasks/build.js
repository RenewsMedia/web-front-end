module.exports = function(grunt) {
    grunt.registerTask('build', ['requirejs:build', 'sass:build', 'bake:build', 'prettify:build', 'copy:build']);
};