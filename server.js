var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var database = require('./config/database');
var port = process.env.PORT || 8080;

var app = express();


mongoose.connect(database.url);
var db = mongoose.connection;

db.once('open', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Database up and running...");
});

db.on('error', function(err) {
  console.log(err);
  return;
});

app.use(express.static(__dirname + "/public/"));
  // app.use(express.logger('dev'));
app.use(bodyParser());

require('./server/models/todo');
require('./server/routes/todos')(app);

app.get('/partials/:partialName', function(req, res) {
  res.sendfile(__dirname + '/public/app/partials/' + req.params.partialName + '.html');
});

app.get('*', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(port);
console.log("Server listenin on port " + port);
