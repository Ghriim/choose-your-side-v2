'use strict';

/**
 * @ngdoc overview
 * @name chooseYourSideApp
 * @description
 * # chooseYourSideApp
 *
 * Main module of the application.
 */
angular
  .module('chooseYourSideApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'views/home/home.html',
          controller: 'HomeCtrl'
      })
      .when('/about/experiences/:slug', {
          templateUrl: 'views/about/experience.html',
          controller: 'AboutExperienceCtrl'
      })
      .when('/about', {
          templateUrl: 'views/about/about.html',
          controller: 'AboutCtrl'
      })
      .when('/blog/:slug', {
          templateUrl: 'views/blog/post.html',
          controller: 'BlogPostCtrl'
      })
      .when('/blog', {
          templateUrl: 'views/blog/posts.html',
          controller: 'BlogPostsCtrl'
      })
      .when('/contact', {
          templateUrl: 'views/contact/contact.html',
          controller: 'ContactCtrl'
      })
      .otherwise({
          redirectTo: '/'
      });
  });
