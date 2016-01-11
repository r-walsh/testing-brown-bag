describe('testDir', function() {
	var $rootScope, $compile;

	beforeEach(module('ngTests'));

	beforeEach(inject(function( _$rootScope_, _$compile_ ) {
		$rootScope = _$rootScope_;
		$compile = _$compile_;
	}));

	it('should replace the element with the appropriate content', function() {
		var element = $compile('<test-dir></test-dir>')($rootScope);

		expect(element.html()).to.equal('This is my directive');
	});

});