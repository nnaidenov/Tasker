angular.module('todoController', [])
  .controller('mainController', function($scope, $http, Todos) {
    $scope.formData = {};
    
    Todos.get()
      .success(function(data) {
        $scope.todos = data;
        console.log(data);
      })
      .error(function(err) {
        console.log('Error: ' + err);
      });

    $scope.createTodo = function() {
      Todos.create($scope.formData)
        .success(function(data) {
          $scope.formData = {};
        })
        .error(function(err) {
          console.log('Error: ' + err);
        });
    };

    $scope.deleteTodo = function(id) {
      console.log(id);
      Todos.delete(id)
        .success(function(data) {
          console.log('Deleted');
        })
        .error(function(err) {
          console.log('Error: ' + err);
        });
    };
  });