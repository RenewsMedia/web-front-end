var deps = [];
Object.keys(window.__karma__.files).forEach(function(file) {
    if (/\.test\.js$/i.test(file)) {
        deps.push(file);
    }
});

require.config(_.extend(requireConfig, {
    baseUrl: '/base/src',
    deps: deps,
    callback: window.__karma__.start
}));