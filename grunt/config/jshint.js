module.exports = {
    base: ['Gruntfile.js', 'server.js', 'grunt/**/*.js'],
    scripts: ['scripts/**/*.js', '!scripts/bower_components/**/*.js'],
    test: ['test/**/*.test.js']
};