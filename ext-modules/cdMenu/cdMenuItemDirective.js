/// <reference path="C:\Users\MdSabbirRahman\Desktop\widget_manager\index.html" />

"use restrict";
angular.module("cdMenu")
       .directive("cdMenuItemDirective", function () {
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