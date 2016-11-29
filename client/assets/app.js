var app = angular.module('app', ['ngRoute']);

app.factory('loginInterceptor',['$q','$location',function($q, $location){
    return{
        'responseError': function(rejection){
            if (rejection.status == 401){
                $location.url('/login');
            }
            return $q.reject(rejection);
        }
    }
}]);

app.config(function ($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('loginInterceptor');
    $routeProvider
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller:'sessionsController'
        })
        .when('/show', {
            templateUrl: 'partials/home.html'
            // controller:'usersController'
        })
        .when('/house', {
            templateUrl: 'partials/house.html'
            // controller:'usersController'
        })
        .when('/budget', {
            templateUrl: 'partials/budget.html'
            // controller:'usersController'
        })
        .when('/car', {
            templateUrl: 'partials/car.html'
            // controller:'usersController'
        })
        .when('/home', {
            templateUrl: 'partials/home.html'
            // controller:'usersController'
        })
        .when('/invest', {
            templateUrl: 'partials/invest.html'
            // controller:'usersController'
        })
        .when('/mutual', {
            templateUrl: 'partials/mutual.html'
            // controller:'usersController'
        })
        .when('/retire', {
            templateUrl: 'partials/retire.html'
            // controller:'usersController'
        })

        .otherwise({
            redirectTo: '/login'
        });
});