app = angular.module("my-directive-test", []);

app.directive('myTest', [function () {
	return {
		restrict: 'E',
		replace: false,
		template: '<p ng-repeat="test in tests">{{ test.name }}</p>',
		// templateUrl: 'directive.tpl.html',
		controller: ["$scope", function ($scope) {
			$scope.tests = [
				{"name": "Test 1"},
				{"name": "Test 2"}
			]
		}]
	}
}]);

describe('my test directive', function () {
	var $compile;
	var $scope;
	var element;

	beforeEach(module('my-directive-test'));

	beforeEach(module('templates'));

	beforeEach(inject(function (_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$scope = _$rootScope_.$new();

		element = angular.element('<my-test></my-test>');
		$compile(element)($scope);
		$scope.$digest();
	}));

	it("Should display two p tags with corresponding test names as text", function () {
		var paragraphs = element.find('p');

		expect(paragraphs.length).toEqual(2);

		expect(paragraphs.eq(0).text()).toEqual('Test 1');
		expect(paragraphs.eq(1).text()).toEqual('Test 2');
	})
});