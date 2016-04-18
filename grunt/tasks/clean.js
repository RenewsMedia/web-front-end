module.exports = function(grunt) {
    var config = {
        default: ['./build', './dist'],
        full: ['./node_modules', './src/bower_components']
    };

    var cleanup = function(config) {
        config.forEach(function(path) {
            if (grunt.file.exists(path)) {
                grunt.file.delete(path);
            }
            grunt.log.ok('Clean ' + path);
        });
    };

    grunt.registerTask('clean', function(type) {
        cleanup(config.default);

        if (type === 'full') {
            cleanup(config.full);
        }
    });
};