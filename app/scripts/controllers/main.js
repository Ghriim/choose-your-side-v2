'use strict';

/**
 * @ngdoc function
 * @name chooseYourSideApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chooseYourSideApp
 */
angular.module('chooseYourSideApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
