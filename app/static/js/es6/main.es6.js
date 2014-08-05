'use strict';
/* global angular */
/* jshint unused:false */
(function(){
  var ToDo = angular.module('ToDo', []);

  ToDo.controller('mainController', ['$scope', '$http', ($scope, $http)=>{
    $scope.formData = {};
    $scope.todos = [];

    $http.get('/todos')
      .success(data=>{
        $scope.todos = data;
        console.log(data);
      })
      .error(data=>{
        console.log(`Error: ${data}`);
      });

    $scope.createTodo = ()=>{
      $http.post('/todos', $scope.formData)
        .success(data=>{
          $scope.formData = {};
          $scope.todos = data;
          console.log(data);
        })
        .error(data=>{
          console.log(`Error: ${data}`);
        });
    };

    $scope.deleteTodo = id=>{
      $http.delete('/todos/' + id)
        .success(data=>{
          $scope.todos = data;
          console.log(data);
        })
        .error(data=>{
          console.log(`Error: ${data}`);
        });
    };
  }]);
})();
