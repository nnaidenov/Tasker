var mongoose = require("mongoose");

var todoSchema = mongoose.Schema({
  text: String,
  done: Boolean
});

mongoose.model('Todo', todoSchema);
