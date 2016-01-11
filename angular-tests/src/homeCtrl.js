angular.module('ngTests')
.controller('homeCtrl', function( $scope ) {
	
	this.scope = $scope;

	$scope.returnOne = function() {
		return 1;
	}

});