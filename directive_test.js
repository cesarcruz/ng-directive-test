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
