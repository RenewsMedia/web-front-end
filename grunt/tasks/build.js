module.exports = function(grunt) {
    grunt.registerTask('build', [
        'requirejs:build',
        'sass:build', 'autoprefixer:build', 'cssmin:build',
        'bake:build', 'prettify:build',
        'copy:build'
    ]);
};