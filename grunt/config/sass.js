module.exports = {
    dev: {
        options: {
            cacheLocation: 'theme/scss/.sass-cache',
            sourcemap: 'none',
            unixNewlines: true
        },
        files: {
            './theme/css/style.css': './theme/scss/style.scss'
        }
    },
    build: {
        options: {
            noCache: true,
            unixNewlines: true,
            style: 'compressed'
        },
        files: {
            './build/style.min.css': './theme/scss/style.scss'
        }
    }
};