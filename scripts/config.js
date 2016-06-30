define(function() {
    return {
        auth: {
            id_cookie: '__uid',
            pass_cookie: '__ups'
        },
        api: {
            proto: 'http',
            host: 'localhost:5000',
            base: '/api/v1'
        }
    };
});