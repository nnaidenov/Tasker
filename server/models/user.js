var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  username: String
});

mongoose.model('User', userSchema);
