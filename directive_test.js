describe('my test directive', function () {
	var $compile;
	var $scope;
	var $httpBackend;
	var $controller;
	var element;

	beforeEach(module('my-directive-test'));

	beforeEach(module('templates'));

	beforeEach(inject(function (_$compile_, _$controller_, _$rootScope_, _$httpBackend_) {
		$compile = _$compile_;
		$httpBackend = _$httpBackend_;
		$controller = _$controller_;
		$scope = _$rootScope_.$new();

		$httpBackend.when('GET', "/my-test.data.json").respond({
			"results": [
				{
					"name": "Test 1"
				},
				{
					"name": "Test 2"
				}
			]
		});

		$controller('MyTestDirectiveController', {$scope: $scope});
		$httpBackend.flush();

		element = angular.element('<my-test></my-test>');
		$compile(element)($scope);
		$scope.$digest();
	}));

	afterEach(function () {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it("Should display two p tags with corresponding test names as text", function () {
		var paragraphs = element.find('p');
		$httpBackend.flush();

		expect(paragraphs.length).toEqual(2);

		expect(paragraphs.eq(0).text()).toEqual('Test 1');
		expect(paragraphs.eq(1).text()).toEqual('Test 2');
	})
});