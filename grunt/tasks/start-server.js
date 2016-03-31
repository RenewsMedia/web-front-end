module.exports = function(grunt) {
    grunt.registerTask('start-server:dev', ['init', 'connect:dev', 'watch']);
};