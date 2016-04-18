module.exports = {
    build: {
        options: {
            baseUrl: './src',
            mainConfigFile: 'src/require.config.js',
            out: 'build/app.min.js',
            name: 'startup',
            generateSourceMaps: false,
            preserveLicenseComments: false,
            include: [
                'bower_components/requirejs/require.js'
            ]
        }
    }
};