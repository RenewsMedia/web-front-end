module.exports = {
    dev: {
        options: {
            content: {
                build: false,
                cssStyleFile: './dist/theme/css/style.css'
            }
        },
        files: {
            'dist/page.html': 'page/main.html'
        }
    },
    build: {
        options: {
            content: {
                build: true,
                cssStyleFile: './theme/css/style.min.css'
            }
        },
        files: {
            'build/page.html': 'page/main.html'
        }
    }
};