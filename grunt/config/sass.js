module.exports = {
    dist: {
        options: {
            noCache: true,
            sourcemap: 'none'
        },
        files: {
            './theme/css/style.css': './theme/scss/style.scss'
        }
    }
};