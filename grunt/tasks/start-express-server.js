var exec = require('child_process').exec;

module.exports = function(grunt) {
    grunt.registerTask('start-express-server', function() {
        exec('node ./server.js 8090 dist/page.html', function(error, stdout, stderr) {
            grunt.log.writeln('Server: ' + stdout);
            grunt.log.error('Server: ' + stderr);
            if (error !== null) {
                grunt.log.error('exec error: ' + error);
            }
        });
    });
};