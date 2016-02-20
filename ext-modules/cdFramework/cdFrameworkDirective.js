
"use strict";

angular.module("cdFramework")
    .directive("cdFramework", function () {
        return {
            transclude: true,
            scope: {
                title: '@',
                subtitle: '@',
                iconFile: '@'
            },
            controller: "cdFrameworkController",
            templateUrl: "ext-modules/cdFramework/cdFrameworkTemplate.html"
        };
    }
);