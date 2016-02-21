
"use restrict"

angular.module("cdMenu")
       .directive("cdMenu", function () {
           return {
               transclude: true,
               controller: "cdMenuController",
               templateUrl: "ext-modules/cdMenu/cdMenuTemplate.html",
               link: function (scope, el, attr) {

               }

           };

       }
);