module.exports = {
    dev: {
        options: {
            content: {
                build: false,
                cssStyleFile: './theme/css/style.css'
            }
        },
        files: {
            'page.html': 'page/main.html'
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