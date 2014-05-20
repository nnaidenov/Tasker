var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
 app.use(express.static(__dirname + '/public')); 

mongoose.connect("mongodb://Admin:1234@ds051658.mongolab.com:51658/tasker");
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
});

  app.use(express.static(__dirname + "./public"));
  // app.use(express.logger('dev'));
  app.use(bodyParser());
  // app.use(express.methodOvverride());

require('./server/models/todo');
require('./server/routes/todos')(app);

app.get('*', function(req, res) {
  res.sendfile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(8080);
console.log("Server listenin on port 8080");
