app.controller('mainController', 
   function($scope, Todos, notify, socket) {
  
   socket.on('message', function(data) {
     console.log(data);
     socket.emit('send', {message: 'Done'});
   });
     
    $scope.formData = {};
    
    Todos.get()
      .success(function(data) {
        $scope.todos = data;
      })
      .error(function(err) {
        console.log('Error: ' + err);
      });

    $scope.createTodo = function() {
      if(!$scope.formData.isEmpty()) {
        var capitalizeTask = $scope.formData.text.capitalize();
        Todos.create({text: capitalizeTask})
          .success(function(data) {
            $scope.todos.push(data.data);
            
            $scope.formData = {};
            
            notify({message: 'Successfully created.', template: './app/notificationTemplates/success.html'});
          })
          .error(function(err) {
            console.log('Error: ' + err);
          });
        } else {
          notify({message: 'Please, fill the form.', template: './app/notificationTemplates/error.html'});
        }
    };

    $scope.deleteTodo = function(id) {
      Todos.delete(id)
        .success(function(data) {
          var possition = $scope.todos.length;

          while( possition-- ) {
              if( $scope.todos[possition]._id == id ) break;
          }
          
          $scope.todos.splice(possition, 1);
          notify({message: 'Successfully deleted!', template: './app/notificationTemplates/success.html'});
        })
        .error(function(err) {
          console.log('some error occurred: ' + err);
        });
    };
  });
