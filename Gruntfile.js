module.exports = function(grunt) {
    var devServerPort = 8090,
        basePage = './index.html';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            dev: {
                options: {
                    port: devServerPort,
                    keepalive: true,
                    base: {
                        path: './',
                        options: {
                            index: basePage,
                            lastModified: false
                        }
                    },
                    open: {
                        target: 'http://localhost:' + devServerPort,
                        appName: 'chrome'
                    },
                    middleware: function() {
                        return [function(req, res) {
                            var file = '.' + req.url;
                            if (!(/(\.(htm|js|json|css|jpg|png|ico|woff|ttf|map))$/i).test(file)) {
                                file = basePage;
                            }
                            require('fs').createReadStream(file).pipe(res);
                        }]
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
