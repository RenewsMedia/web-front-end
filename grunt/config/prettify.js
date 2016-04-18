module.exports = {
    dev: {
        options: {
            preserveBOM: true,
            indent: 4,
            indent_scripts: 4
        },
        files: {
            'dist/page.html': 'dist/page.html'
        }
    },
    build: {
        options: {
            preserveBOM: true,
            indent: 4,
            indent_scripts: 4
        },
        files: {
            'build/page.html': 'build/page.html'
        }
    }
};