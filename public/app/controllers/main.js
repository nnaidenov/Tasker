angular.module('todoController', [])
  .controller('mainController', function($scope, Todos) {
    $scope.formData = {};

Object.prototype.isEmpty = function() {
    for(var key in this) {
        if(this.hasOwnProperty(key))
            return false;
    }

    return true;
}
    Todos.get()
      .success(function(data) {
        $scope.todos = data;
        console.log(data);
      })
      .error(function(err) {
        console.log('Error: ' + err);
      });

    $scope.createTodo = function() {
      console.log();
      if(!$scope.formData.isEmpty()) {
        Todos.create($scope.formData)
          .success(function(data) {
            $scope.formData = {};
          })
          .error(function(err) {
            console.log('Error: ' + err);
          });
        } else {
          alert('err');
        }
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
