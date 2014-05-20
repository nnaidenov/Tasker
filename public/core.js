angular.module('todoApp', []);

function mainController($scope, $http) {
  
  $http.get('/api/todos')
    .success(function(data) {
      $scope.todos = data;
      console.log(data);
    })
    .error(function(err) {
      console.log('Error: ' + err);
    });
  
  $scope.createTodo = function() {
    $http.post('/api/todo', $scope.formData)
      .success(function(data) {
        $scope.formData = {};
      })
      .error(function(err) {
        console.log('Error: ' + err);
      });
  }
  
  $scope.deleteTodo = function(id) {
    $http.delete('/api/todo/' + id)
      .success(function(data) {
        console.log('Deleted');
      })
      .error(function(err) {
        console.log('Error: ' + err);
      });
  };
};