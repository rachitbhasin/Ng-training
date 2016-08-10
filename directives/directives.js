var app = angular.module('Directives',[]);
	

	app.directive("testD", function() {
	    return {
	    	restrict: 'EA',
	        templateUrl : "../templates/test.html"
	    };
	});