app = angular.module("my-directive-test", []);

app.directive('myTest', [function () {
	return {
		restrict: 'E',
		replace: false,
		templateUrl: 'my-test.tpl.html',
		controller: ["$scope", function ($scope) {
			$scope.tests = [
				{"name": "Test 1"},
				{"name": "Test 2"}
			]
		}]
	}
}]);
