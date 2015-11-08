var app = angular.module('testAngular', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/MyComponent.html',
                controller: 'MyComponentCtrl'

            })
            .when('/page1', {
                templateUrl: 'pages/Page1.html',
                controller: 'Page1Ctrl'
            })
            .when('/page2', {
                templateUrl: 'pages/Page2.html',
                controller: 'Page2Ctrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        //.when('/page2', {
        //    controller: 'Page2Ctrl',
        //    templateUrl: 'Page2.html'
        //});

    }]);