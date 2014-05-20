var todo = require('../controllers').todo;

module.exports = function(app) {
  app.get('/api/todos', todo.getAllTodos);
  app.post('/api/todo', todo.createTodo);
  app.delete('api/todo/:id', todo.deleteTodo);
};
