module.exports = function(grunt) {
    grunt.registerTask('start-server:dev', ['sass', 'connect:dev', 'watch:sass']);
};