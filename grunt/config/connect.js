module.exports = function(grunt, config) {
    return {
        dev: {
            options: {
                port: config.dev.port,
                base: {
                    path: './',
                    options: {
                        index: config.basePage,
                        lastModified: false
                    }
                },
                open: {
                    target: 'http://localhost:' + config.dev.port,
                    appName: 'chrome'
                },
                middleware: function() {
                    return [function(req, res) {
                        var file = '.' + req.url;
                        if (!(/(\.(htm|js|json|css|jpg|png|ico|woff|ttf|map))$/i).test(file)) {
                            file = config.basePage;
                        }
                        require('fs').createReadStream(file).pipe(res);
                    }]
                }
            }
        }
    };
};