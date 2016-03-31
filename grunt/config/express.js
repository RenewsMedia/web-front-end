module.exports = function(grunt, config) {
    return {
        dev: {
            options: {
                port: config.dev.port,
                hostname: '127.0.0.1',
                server: 'server.js',
                open: true
            }
        }
    };
};