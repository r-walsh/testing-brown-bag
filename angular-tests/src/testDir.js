angular.module('ngTests')
.directive('testDir', function() {
	return {

		  restrict: 'E'
		, replace: true
		, template: '<h2>Its working!</h2>'

	}
});