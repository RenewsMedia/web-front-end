var port = process.argv[2] || 8090;
var defaultPage = process.argv[3] || 'page.html';
var app = require('express')();

app.get('*', function(req, res) {
    var file = req.path;
    if (!(/(\.hbs|js|json|css|jpg|png|ico|woff|ttf|map)$/i).test(req.path)) {
        file = defaultPage;
    }
    res.sendFile(__dirname + '/' + file);
});

app.listen(port, function() {
    console.log('The server was started on http://localhost:' + port);
});