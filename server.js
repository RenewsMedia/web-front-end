var port = process.argv[2] || 8090;
var app = require('express')();

app.get('*', function(req, res) {
    var file = req.path;
    if (!(/(\.htm|js|json|css|jpg|png|ico|woff|ttf|map)$/i).test(req.path)) {
        file = 'page.html';
    }
    res.sendFile(process.cwd() + '/' + file);
});

app.listen(port, function() {
    console.log('Express server started on port ' + port);
});