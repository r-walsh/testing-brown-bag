angular.module('ngTests')
.service('userService', function( $http ) {

	this.getUser = function() {
		return $http.get('/api/user');
	}

});