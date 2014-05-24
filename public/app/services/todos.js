app.factory('Todos', function($http) {
    return {
      get: function() {
        return $http.get('/api/todos');
      },
      create: function(todoData) {
        return $http.post('/api/todo', todoData);
      },
      delete: function(id) {
        return $http.delete('/api/todo/' + id);
      }
    }
  });
