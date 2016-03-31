module.exports = function(grunt) {
    grunt.registerTask('start-server:dev', ['init', 'express:dev', 'watch']);
};