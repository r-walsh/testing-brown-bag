describe('homeCtrl', function() {
	var $controller;

	beforeEach(module('ngTests'));

	beforeEach(inject(function( _$controller_ ) {
		$controller = _$controller_;
	}));

	describe('$scope.returnOne', function() {

		it('returns the number one', function() {
			var controller = $controller('homeCtrl', { $scope: {} });
			expect(controller.scope.returnOne()).to.equal(1);
		});

	});


});