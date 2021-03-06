module.exports = function(grunt) {
    var path = require('path'),
        config = {
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
            scope: 'devDependencies'
        }
    });

    grunt.loadTasks('./grunt/tasks');
};