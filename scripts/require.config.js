window.requireConfig = {
    baseUrl: '/scripts',

    paths: {
        node_modules: '../node_modules',
        jquery: 'bower_components/jquery/dist/jquery.min',
        underscore: 'bower_components/underscore/underscore-min',
        backbone: 'bower_components/backbone/backbone-min',
        handlebars: 'bower_components/handlebars/handlebars.min',

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
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
};