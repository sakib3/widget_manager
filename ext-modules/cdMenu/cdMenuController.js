
"use restrict";

angular.module('cdMenu')
       .controller('cdMenuController',
            ['$scope','$rootScope',
                function ($scope, $rootScope) {
                    //set the active item
                    this.setActiveElement = function (el) {
                        $scope.activeElement = el;
                    };
                    //out of cd-Menu broadcast the message
                    this.setRoute = function (route) {
                        $rootScope.$broadcast('cd-menu-item-selected-event',
                            { route: route });
                    };
                }
            ]);