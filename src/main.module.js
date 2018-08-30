var json = {
    "Array": [1, 2, 3], "Boolean": true, "Null": null, "Number": 123,
    "Object": {"a": "b", "c": "d"}, "String": "Hello World",
    "auto": "$Hello World"
};
angular.module('ngApp', ['angular-jsoneditor']).controller('ngCtrl', function ($scope) {
    $scope.obj = {data: json, options: {mode: 'code', onValidate: function(json) {
        console.log(json);
            }}};
    $scope.changeData = function () {
        $scope.obj.data = {foo: 'bar'};
    };
    $scope.changeOptions = function () {
        $scope.obj.options.mode = $scope.obj.options.mode == 'tree' ? 'code' : 'tree';
    };
    $scope.pretty = function (obj) {
        return obj;
    };
});
