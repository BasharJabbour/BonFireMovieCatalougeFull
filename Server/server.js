var express = require('express');
var app = express();
var path = require('path');
var config  = require('../web.config');

var source = config.path;


app.get('/', function (req, res) {
   res.sendFile(path.resolve('index.html'));
});

var server = app.listen(config.port, function () {
   var host = server.address().address
   var port = server.address().port
});