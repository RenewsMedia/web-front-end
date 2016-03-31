module.exports = {
    build: {
        files: [
            {
                expand: true,
                src: ['theme/fonts/**/*', 'theme/images/**/*'],
                dest: 'build'
            }
        ]
    }
};