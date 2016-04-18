module.exports = {
    dev: {
        options: {
            cacheLocation: 'theme/scss/.sass-cache',
            sourcemap: 'none',
            unixNewlines: true
        },
        files: {
            './dist/theme/css/style.css': './theme/scss/style.scss'
        }
    },
    build: {
        options: {
            noCache: true,
            unixNewlines: true,
            sourcemap: 'none'
        },
        files: {
            './build/theme/css/style.min.css': './theme/scss/style.scss'
        }
    }
};