
"use strict";

angular.module("cdFramework")
    .directive("cdFramework", function () {
        return {
            transclude: true,
            scope: {
            
            },
            controller: "cdFrameworkController",
            templateUrl: "ext-modules/cdFramework/cdFrameworkTemplate.html"
        };
    }
);