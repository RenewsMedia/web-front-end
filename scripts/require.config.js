window.requireConfig = {
    baseUrl: '/scripts',

    paths: {
        node_modules: '../node_modules',
        jquery: 'bower_components/jquery/dist/jquery',
        underscore: 'bower_components/underscore/underscore',
        moment: 'bower_components/moment/moment',
        backbone: 'bower_components/backbone/backbone',
        handlebars: 'bower_components/handlebars/handlebars',

        // Plugins
        text: '../node_modules/text/text'
    },

    shim: {
        jquery: {
            exports: 'jQuery'
        },
        underscore: {
            exports: '_'
        },
        moment: {
            exports: 'moment'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
};