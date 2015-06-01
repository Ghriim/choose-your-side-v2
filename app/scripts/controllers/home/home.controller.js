'use strict';

/**
 * @ngdoc function
 * @name chooseYourSideApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the chooseYourSideApp
 */
angular.module('chooseYourSideApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
