module.exports = function(grunt) {
    grunt.registerTask('start-server', ['init', 'start-express-server', 'watch']);
};