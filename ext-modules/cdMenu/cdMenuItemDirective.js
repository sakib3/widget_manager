

"use restrict";
angular.module("cdMenu")
       .directive("cdMenuItem", function () {
           return {
               //require has a parent cdMenu
               require: "^cdMenu",
               scope: {
                   label: '@'
               },
               templateUrl: "ext-modules/cdMenu/cdMenuItemTemplate.html",
               link: function (scope, el, attr,ctrl) {

               }

           };

       }
);