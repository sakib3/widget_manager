
"use restrict";

angular.module('cdMenu')
       .controller('cdMenuController',
            ['$scope','$rootScope',
                function ($scope, $rootScope) {

                    
                    
                    this.getActiveElement = function () {
                        return $scope.activeElement;
                    }
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