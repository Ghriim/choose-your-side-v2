'use strict';

/**
 * @ngdoc function
 * @name chooseYourSideApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the chooseYourSideApp
 */
angular.module('chooseYourSideApp')
  .controller('BlogPostCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getCurrentPost = function() {
        $http.get('data/posts/posts.json').success(function(posts) {
            angular.forEach(posts, function(post) {
                if(post.slug == $routeParams.slug) {
                    $scope.currentPost = post;
                    $scope.getSimilarPosts();
                }
            });
        });
    };

    $scope.getPostContent = function() {
        return 'data/posts/' + $routeParams.slug + '/_post.html';
    };

    $scope.getSimilarPosts = function() {
        var currentPostTags = $scope.currentPost.tags;
        var similarPosts = [];
        var numberOfCommonTagsRequested = 2;
        var maxNumberOfSimilarPost = 3;

        $http.get('data/posts/posts.json').success(function(posts) {
            for (var i = 0; posts.length; ++i) {
                var post = posts[i];
                var commonTags = jQuery.grep(currentPostTags, function(el) {
                    return jQuery.inArray(el, post.tags) > -1;
                });

                if(commonTags.length >= numberOfCommonTagsRequested
                   && post.slug != $scope.currentPost.slug) {
                    similarPosts.push(post);
                }

                if(commonTags.length >= maxNumberOfSimilarPost) {
                    break;
                }
            }
        });

        $scope.similarPosts = similarPosts;
    };
  }]);
