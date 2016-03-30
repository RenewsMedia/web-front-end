module.exports = {
    dist: {
        options: {
            noCache: true,
            sourcemap: 'none'
        },
        files: {
            './theme/style.css': './theme/scss/style.scss'
        }
    }
};