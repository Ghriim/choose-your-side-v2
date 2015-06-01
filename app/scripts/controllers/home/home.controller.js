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

    $scope.displaySideDescription = function(sideId) {
        var side = jQuery(sideId);

        /*
        jQuery('.side-presentation').removeClass('description-displayed');
        forceSide.find('.side-presentation').addClass('description-displayed');
        */
        if(side.hasClass('description-displayed')) {
            hideDescription(side);
        } else {
            showDescription(side);
        }
    };

    function hideDescription(side) {
        var animation = {};
        if(side.attr('id') == 'light-side') {
            animation = {'marginLeft': '0px'};
        } else {
            animation = {'marginLeft': '0px'};
        }

        side.removeClass('description-displayed');
        side.find('.side-presentation p').animate({'opacity': 0}, 1000, function() {
            side.find('.side-presentation img').animate(animation, 1000);
        });
    }

    function showDescription(side) {
        var animation = {};
        if(side.attr('id') == 'light-side') {
            animation = {'marginLeft': '-100%'};
        } else {
            animation = {'marginLeft': '50%'};
        }

        side.addClass('description-displayed');
        side.find('.side-presentation img').animate(animation, 1000, function() {
            side.find('.side-presentation p').animate({'opacity': 1}, 1000);
        });
    }
  });
