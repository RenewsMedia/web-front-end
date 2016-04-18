module.exports = {
    dev: {
        files: [
            {
                expand: true,
                src: ['theme/fonts/**/*', 'theme/images/**/*'],
                dest: 'dist/'
            }
        ]
    },
    build: {
        files: [
            {
                expand: true,
                src: ['theme/fonts/**/*', 'theme/images/**/*'],
                dest: 'build/'
            },
            {
                src: 'server.js',
                dest: 'build/server.js'
            }
        ]
    }
};