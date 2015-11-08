'use strict';

app.controller('MyComponentCtrl', ['$location', function ($location) {
    var mycomponent = this;
    mycomponent.goPage1 = function () {
        $location.path('/page1');
    };

    mycomponent.goPage2 = function () {
        $location.path('/page2');
    };

    }]);