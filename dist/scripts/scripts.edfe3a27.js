"use strict";angular.module("chooseYourSideApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home/home.html",controller:"HomeCtrl"}).when("/about/experiences/:slug",{templateUrl:"views/about/experience.html",controller:"AboutExperienceCtrl"}).when("/about",{templateUrl:"views/about/about.html",controller:"AboutCtrl"}).when("/blog/:slug",{templateUrl:"views/blog/post.html",controller:"BlogPostCtrl"}).when("/blog",{templateUrl:"views/blog/posts.html",controller:"BlogPostsCtrl"}).when("/contact",{templateUrl:"views/contact/contact.html",controller:"ContactCtrl"}).otherwise({redirectTo:"/"})}]),[{title:"GuzzleBundle: easily consume APIs",slug:"guzzlebundle","abstract":"Guzzle is a PHP HTTP client that makes it easy to send HTTP requests and trivial to integrate with web services. An awesome bundle exists that allow us to easily integrate Guzzle in our Symfony2 project.",creationDate:"",publicationDate:"",status:"active",tags:["PHP","Symfony2","bundle","API"]},{title:"Feedbacks on the SensioLabs training program",slug:"sensiolabs-training","abstract":"Feedbacks on my SensioLabs Training Why a training? I have been working as a Web Developer for about 4 years (2 years in JAVA & 2 years in PHP). I have learned Symfony2 by myself then I worked in a company. So my knowledge is based on the resources I found in the beginning of my studies and the specific problems I had to solve at work.",creationDate:"",publicationDate:"",status:"active",tags:["PHP","Symfony2","feedback"]},{title:"Charts in your Symfony2 projects",slug:"chars-with-symfony2","abstract":"When you work on hight quantity of data, the best way of let them being easily understood is to present the as Charts. In the past you could have been frustrating when you implement those charts in PHP, but starting now it will become very easy !",creationDate:"",publicationDate:"",status:"active",tags:["PHP","Symfony2","bundle","charts","tutorial"]},{title:"What's new in Symfony 2.4",slug:"symfony-2_4","abstract":"Few months ago, Fabien Potencier used the mailing to ask the community their wishes for the new version of Symfony 2. After receiving plenty of request about the Cache and Rest API, SensioLabs deliver on the 3rd of December the 2.4. Let's see if father Santa has been listening to our request. ",creationDate:"",publicationDate:"",status:"active",tags:["Symfony2","release note"]}][{title:"Telemetris",slug:"telemetris","abstract":"Software editor",creationDate:"",status:"active"}],angular.module("chooseYourSideApp").controller("HomeCtrl",["$scope",function(a){function b(a){var b={};b="light-side"==a.attr("id")?{marginLeft:"0px"}:{marginLeft:"0px"},a.removeClass("description-displayed"),a.find(".side-presentation p").animate({opacity:0},1e3,function(){a.find(".side-presentation img").animate(b,1e3)})}function c(a){var b={};b="light-side"==a.attr("id")?{marginLeft:"-100%"}:{marginLeft:"50%"},a.addClass("description-displayed"),a.find(".side-presentation img").animate(b,1e3,function(){a.find(".side-presentation p").animate({opacity:1},1e3)})}a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.displaySideDescription=function(a){var d=jQuery(a);d.hasClass("description-displayed")?b(d):c(d)}}]),angular.module("chooseYourSideApp").controller("BlogPostsCtrl",["$scope","$http",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.getPosts=function(){b.get("data/posts/posts.json").success(function(b){a.posts=b})}}]),angular.module("chooseYourSideApp").controller("BlogPostCtrl",["$scope","$routeParams","$http",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.getCurrentPost=function(){c.get("data/posts/posts.json").success(function(c){angular.forEach(c,function(c){c.slug==b.slug&&(a.currentPost=c,a.getSimilarPosts())})})},a.getPostContent=function(){return"data/posts/"+b.slug+"/_post.html"},a.getSimilarPosts=function(){var b=a.currentPost.tags,d=[],e=2,f=3;c.get("data/posts/posts.json").success(function(c){for(var g=0;c.length;++g){var h=c[g],i=jQuery.grep(b,function(a){return jQuery.inArray(a,h.tags)>-1});if(i.length>=e&&h.slug!=a.currentPost.slug&&d.push(h),i.length>=f)break}}),a.similarPosts=d}}]),angular.module("chooseYourSideApp").controller("AboutCtrl",["$scope","$http",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.getExperiences=function(){b.get("data/experiences/experiences.json").success(function(b){a.experiences=b})}}]),angular.module("chooseYourSideApp").controller("AboutExperienceCtrl",["$scope","$routeParams","$http",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.getCurrentExperience=function(){c.get("data/experiences/experiences.json").success(function(c){angular.forEach(c,function(c){c.slug==b.slug&&(a.currentExperience=c)})})},a.getExperienceContent=function(){return"data/experiences/"+b.slug+"/_experience.html"}}]),angular.module("chooseYourSideApp").controller("ContactCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);