module.exports = {
    dist: {
        options: {
            cacheLocation: 'theme/scss/.sass-cache',
            sourcemap: 'inline',
            unixNewlines: true,
            style: 'compressed'
        },
        files: {
            './theme/css/style.min.css': './theme/scss/style.scss'
        }
    }
};