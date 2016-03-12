
"use restrict";

angular.module("cdFramework")
    .controller("cdFrameworkController",
    ['$scope', '$window', '$timeout', '$rootScope',
        function ($scope, $window, $timeout, $rootScope) {

            $scope.isMenuVisible = true;
            $scope.isMenuButtonVisible = true;

            //listen to 'cd-menu-item-selected-event' event
            $scope.$on('cd-menu-item-selected-event', function (evt,data) {
                $scope.routeString = data.route;
                checkWidth();
                broadcastMenuState();
            });

           

            // listen resize want
            $($window).on('resize.cdFramework', function () {
                // apply the changes in scope variable when event fired
                $scope.$apply(function () {
                    checkWidth();
                    broadcastMenuState();
                });
            });

            // release the handeller from the window 
            $scope.$on("$destroy", function () {
                $($window).off("resize.cdFramework");
            });

            var checkWidth = function () {
                //get window width
                // sometime scroler width comes up so to handle that we need to find the max values between the widths
                var width = Math.max($($window).width(), $($window).innerWidth());

                // isMenuVisible is true only when width is greater than 786 px
                $scope.isMenuVisible = (width >= 768);

                // isMenuVisible is true only if width <= 786
                $scope.isMenuButtonVisible = !$scope.isMenuVisible;
            };

            $scope.menuButtonClicked = function () {
                console.log($scope.isMenuVisible);
                // menuButtonClicked toggled the isMenuVisible state
                $scope.isMenuVisible = !$scope.isMenuVisible;
                console.log('ntn clicked');
                console.log($scope.isMenuVisible);
                // we  need to communicate with other views inorder to get changes that made
                broadcastMenuState();
                //$scope.$apply();
            };

            var broadcastMenuState = function () {
                $rootScope.$broadcast('cd-menu-show', {show: $scope.isMenuVisible});
            };

            // call checkWidth outside of the digest cycle
            $timeout(function () {
                checkWidth();
                broadcastMenuState();
            }, 0);
           
            
        }
    ]
);