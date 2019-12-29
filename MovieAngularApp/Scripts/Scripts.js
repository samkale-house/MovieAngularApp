var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope, $http, $log) {
        $http({
            method: 'GET',
            url: 'http://localhost:44364/movies'
        })
            .then(function (response) {
                $scope.movies = response.data;
                $log.info(response);
            }, function (reason) {
                $scope.error = reason.data;
                $log.info(reason);
            }
            )
    })