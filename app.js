app = angular.module("my-directive-test", ['ngRoute']);

app.directive('myTest', [function () {
	return {
		restrict: 'E',
		replace: false,
		templateUrl: 'my-test.tpl.html',
		controller: ['$scope', '$http', function ($scope, $http) {
			$http.get('/my-test.data.json').success(function (data) {
				$scope.tests = data.results
			});
		}]
	}
}]);
