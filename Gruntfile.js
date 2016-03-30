module.exports = function(grunt) {
    var config = {
        basePage: './index.html',
        dev: {
            port: 8090
        }
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
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
        },

        sass: {
            dist: {
                options: {
                    noCache: true,
                    sourcemap: 'none'
                },
                files: {
                    './theme/style.css': './theme/scss/style.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['theme/scss/*.scss', 'theme/scss/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('start-server:dev', ['sass', 'connect:dev', 'watch:sass']);
};