'use strict';

/**
 * @ngdoc function
 * @name chooseYourSideApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the chooseYourSideApp
 */
angular.module('chooseYourSideApp')
  .controller('BlogPostsCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getPosts = function() {
        $http.get('data/posts/posts.json').success(function(data) {
            $scope.posts = data;
        });
    };
  }]);
