'use strict';

angular.module('thisisusApp')
  .controller('GlobalCtrl', function ($scope, $http) {
    $scope.navTemplate = {};
    $scope.navTemplate.url = 'partials/navbar.html';
    
  });
