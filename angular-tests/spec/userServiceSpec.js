describe('userService', function() {
	var userService, $httpBackend;

	beforeEach(module('ngTests'));

	beforeEach(inject(function( _userService_, _$httpBackend_ ) {
		userService = _userService_;
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingRequest();
		$httpBackend.verifyNoOutstandingExpectation();
	});

	describe('getUser', function() {
		it('makes a GET request to /api/user', function() {
			$httpBackend.expectGET('/api/user').respond(200, { name: 'Ryan', password: 'iliekturtles' });

			userService.getUser();

			$httpBackend.flush();
		});
	});

});