
"use restrict";

angular.module("cdFramework")
    .controller("cdFrameworkController",
    ['$scope',
        function ($scope) {
            $scope.$on('cd-menu-item-selected-event', function (evt,data) {
                $scope.routeString = data.route;
            });
            
        }
    ]
);