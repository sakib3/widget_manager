﻿
"use restrict";

angular.module("cdFramework")
    .controller("cdFrameworkController",
    ['$scope', '$window', '$timeout',
        function ($scope, $window, $timeout) {

            $scope.isMenuVisible = true;
            $scope.isMenuButtonVisible = true;

            //listen to 'cd-menu-item-selected-event' event
            $scope.$on('cd-menu-item-selected-event', function (evt,data) {
                $scope.routeString = data.route;
            });

            // listen resize want
            $($window).on('resize.cdFramework', function () {
                // apply the changes in scope variable when event fired
                $scope.$apply(function () {
                    checkWidth();
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

                // isMenuButtonVisible is true only when width is greater than 786 px
                $scope.isMenuVisible = (width >= 768);

                // isMenuVisible is true only if width <= 786
                $scope.isMenuButtonVisible = !$scope.isMenuVisible;
            };

            // call checkWidth outside of the digest cycle
            $timeout(function () {
                checkWidth();
            }, 0);
            
            
        }
    ]
);