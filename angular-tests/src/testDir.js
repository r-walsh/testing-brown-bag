angular.module('ngTests')
.directive('testDir', function() {
	return {

		  restrict: 'E'
		, template: '<h2>This is my directive</h2>'
		, replace: true

	}
});