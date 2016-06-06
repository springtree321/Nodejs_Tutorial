var myApp = angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'ngResource']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        
        //typical routes... when someone navigate to a given directory, load the partial and use the controller
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeController'});
        $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'aboutController'});
        $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'contactController'});
        $routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'projectsController'});
        
        //when anyone navigates to /projects/:project load the partial of the :project.html
        // $routeProvider.when('/projects/:project', {
        //     templateUrl: function(params) {
        //         return '/partials/projects/' + params.project + '.html';
        //     },
        //      controller: 'customerApiController'
        // });
        $routeProvider.when('/projects/customerapi', {templateUrl: '/partials/projects/customerapi.html', controller: 'projectsController'});
        
        //if no valid routes are found, redirect to /home
        $routeProvider.otherwise({redirectTo: '/home'});
        
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    }]);