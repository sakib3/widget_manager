

"use restrict";
angular.module("cdMenu")
       .directive("cdMenuItem", function () {
           return {
               //require has a parent cdMenu
               require: "^cdMenu",
               scope: {
                   label: '@',
                   icon: '@',
                   route: '@'
               },
               templateUrl: "ext-modules/cdMenu/cdMenuItemTemplate.html",
               link: function (scope, el, attr, ctrl) {

                   scope.isActive = function () {
                       return el === ctrl.getActiveElement();
                   };
                   console.log('directive');
                   console.log(scope);
                   el.on('click', function (evt) {

                       //exclusive access of the element
                       evt.stopPropagation();
                       evt.preventDefault();

                       //since the event is a jquery obejct, angular needs to know that scope is being changed  
                       scope.$apply(function () {
                           ctrl.setActiveElement(el);
                           ctrl.setRoute(scope.route);
                       });
                   })
               }

           };

       }
);