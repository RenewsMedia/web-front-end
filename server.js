var app = require('express')();

app.get('*', function(req, res) {
    var file = req.path;
    if (!(/(\.htm|js|json|css|jpg|png|ico|woff|ttf|map)$/i).test(req.path)) {
        file = 'page.html';
    }
    res.sendFile(process.cwd() + '/' + file);
});

module.exports = app;