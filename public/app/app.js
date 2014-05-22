var app = angular.module('todoApp', ['ngResource', 'ngRoute', 'todoService', 'todoController']);

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: "partials/main",
      controller: "mainController"
    });
});
