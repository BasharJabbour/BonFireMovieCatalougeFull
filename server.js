var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


var path = require('path');
var fs = require('fs')

var config  = require(path.resolve('web.config'));
var dataset = require(path.resolve(config.dataset));
var dataSearch = require(path.resolve('movieCatalouge'));

app.use("/public", express.static(__dirname + "/public"));

app.get('/', function (request, result) {

   result.sendFile(path.resolve('index.html'));
});

app.get('/search', function (request, result) {
  var searchTerm = request.query['search'];
  result.send(dataSearch.movieSearch(searchTerm, dataset));
});

app.post('/add', function (request, result) {
  dataset.push(request.body);
  fs.writeFile(path.resolve('MovieDatabase.json'), JSON.stringify(dataset), function(err) {
    if (err) {
      result.send("something went wrong");
    } else {
      result.send("movie added successfuly");
    }
  });
});

var server = app.listen(config.port, function () {
   var host = server.address().address
   var port = server.address().port
});
