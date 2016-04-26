module.exports = function(config) {
    config.set({
        basePath: './',

        files: [
            'src/bower_components/underscore/underscore.js',
            'src/require.config.js',

            { pattern: 'test/**/*.test.js', included: false },
            { pattern: 'src/**/**', included: false },
            { pattern: 'node_modules/text/text.js', included: false },

            'test/main-test.js'
        ],

        browsers: ['PhantomJS'],
        frameworks: ['jasmine', 'requirejs'],
        reporters: ['spec'],

        singleRun: true
    });
};