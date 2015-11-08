app.controller('Page2Ctrl', ['$http', '$location', function ($http, $location) {
    var page1 = this;
    page1.json = "name";

    page1.getjson = function () {
        $http.get("http://localhost:3000/messages")
            .success(function (response) {
                page1.json = response.name;
                //console.log(response);
            });
    };

    page1.goHome = function () {
        $location.path('/');
    };
}]);



