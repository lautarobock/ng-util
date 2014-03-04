(function() {

    var form = angular.module("gt.form", []);

    form.run(['$templateCache',function($templateCache) {
        $templateCache.put("form/input-text.html",
            '<label tooltip="{{dlTooltip}}" tooltip-placement="right" for="{{id}}" class="control-label">{{caption}}</label>' + 
            '<input focus-on="{{id}}" type="text" ng-model="value" class="form-control" id="{{id}}" placeholder="{{placeholder}}">'
        );
        
        $templateCache.put("form/input-numeric.html",
            '<label tooltip="{{dlTooltip}}" tooltip-placement="right" for="{{id}}" class="control-label">{{caption}}</label>' + 
            '<input type="number" step="{{step}}" ng-model="value" class="form-control" id="{{id}}" placeholder="{{placeholder}}">'
        );
    }]);

    form.directive("dlInputText", function() {
        return {
            restrict : 'EA',
            scope : {
                id: '@',
                value: '=',
                caption: '@',
                dlTooltip: '@',
                placeholder: '@'
            },
            templateUrl: 'form/input-text.html'
        };
    });

    form.directive("dlInputNumber", function() {
        return {
            restrict : 'EA',
            scope : {
                id: '@',
                value: '=',
                caption: '@',
                step: '@',
                dlTooltip: '@',
                placeholder: '@'
            },
            templateUrl: 'form/input-numeric.html'
        };
    });


})();