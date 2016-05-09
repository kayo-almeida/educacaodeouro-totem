angular.module("educacaoDeOuroTotem").config(function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "views/home.html",
        controller: "homeController"
    });

    $routeProvider.when("/404", {
        templateUrl: "views/404.html",
        controller: "notFoundController"
    });

    $routeProvider.otherwise({redirectTo: "/404"});
});