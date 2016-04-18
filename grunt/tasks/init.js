module.exports = function(grunt) {
    grunt.registerTask('init', ['bake:dev', 'prettify:dev', 'sass:dev', 'autoprefixer:dev', 'copy:dev']);
};