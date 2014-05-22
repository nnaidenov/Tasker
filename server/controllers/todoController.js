var Todo  = require('mongoose').model('Todo');

module.exports = {
  getAllTodos: function(req, res) {
    Todo.find(function(err, todos) {
      if(err) {
        res.send(err);
      }

      res.json(todos);
    });
  },
  createTodo: function(req, res) {
    var todo = {
      text: req.body.text,
      done: false
    }

    Todo.create(todo, function(err, todo) {
      if(err) {
        res.send(err);
      }

      res.json(todo);
    });
  },
  deleteTodo: function(req, res) {
    Todo.remove({
      _id: req.params.id
    }, function(err, todo) {
      if(err) {
        res.send(err);
      }

      res.json({result: "done"});
    });
  }
};
