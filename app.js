(function (){

  'use strict';



  //angular.module returns an object
  angular.module('nameApp', [])

  .controller('nameController', function($scope){
    $scope.name = "";
    $scope.numValue = 0;

    $scope.getNumValue = function(){
      $scope.numValue = calculateValue($scope.name);
    };

    function calculateValue(string){
      var numValue = 0;
      for(var i=0;i<string.length;i++){
        numValue += string.charCodeAt(i);
      }
      return numValue;
    }

  });


})();
