
"use restrict";

angular.module("cdFramework")
    .controller("cdFrameworkController",
    ['$scope',
        function ($scope) {
            $scope.isMenuButtonVisible = true;
            //listen to 'cd-menu-item-selected-event' event
            $scope.$on('cd-menu-item-selected-event', function (evt,data) {
                $scope.routeString = data.route;
            });
            
        }
    ]
);