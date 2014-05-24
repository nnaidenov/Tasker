var app = angular.module('todoApp', ['ngResource', 'ngRoute', 'cgNotify']);

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: "partials/main",
      controller: "mainController"
    });
});

Object.prototype.isEmpty = function() {
  for(var key in this) {
    if(this.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}