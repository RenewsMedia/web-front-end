module.exports = function(grunt) {
    var path = require('path'),
        config = {
            basePage: './index.html',
            dev: {
                port: 8090
            }
        };

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config'),
        init: true,
        data: config,

        loadGruntTasks: {
            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: 'dependencies'
        }
    });

    grunt.loadTasks('./grunt/tasks');
};