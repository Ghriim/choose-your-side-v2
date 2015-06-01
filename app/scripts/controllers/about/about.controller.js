'use strict';

/**
 * @ngdoc function
 * @name chooseYourSideApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the chooseYourSideApp
 */
angular.module('chooseYourSideApp')
  .controller('AboutCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getExperiences = function() {
        $http.get('data/experiences/experiences.json').success(function(data) {
            $scope.experiences = data;
        });
    };
  }]);
