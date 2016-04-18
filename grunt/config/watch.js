module.exports = {
    sass: {
        files: ['theme/scss/*.scss', 'theme/scss/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer:dev']
    },
    bake: {
        files: ['page/*.html', 'page/**/*.html'],
        tasks: ['bake:dev']
    }
};