'use strict';

/**
 * @ngdoc function
 * @name chooseYourSideApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the chooseYourSideApp
 */
angular.module('chooseYourSideApp')
  .controller('AboutExperienceCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getCurrentExperience = function() {
        $http.get('data/experiences/experiences.json').success(function(experiences) {
            angular.forEach(experiences, function(experience) {
                if(experience.slug == $routeParams.slug) {
                    $scope.currentExperience = experience;
                }
            });
        });
    };

    $scope.getExperienceContent = function() {
        return 'data/experiences/' + $routeParams.slug + '/_experience.html';
    };
  }]);
