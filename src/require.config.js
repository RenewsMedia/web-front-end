requirejs.config({
    baseUrl: '/src',

    paths: {
        node_modules: '../node_modules',
        jquery: 'bower_components/jquery/dist/jquery.min',
        underscore: 'bower_components/underscore/underscore-min',
        backbone: 'bower_components/backbone/backbone-min',

        Util: 'common/util/Util'
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
        }
    }
});