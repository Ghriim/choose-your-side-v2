'use strict';

/**
 * @ngdoc function
 * @name chooseYourSideApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the chooseYourSideApp
 */
angular.module('chooseYourSideApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
