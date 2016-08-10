var app = angular.module('myFirstApp',[]);
	

	app.directive("testD", function() {
	    return {
	    	restrict: 'EA',
	        templateUrl : "test.html"
	    };
	});

	/*app.directive("testD", function() {
	    return {
	    	restrict: 'EA',
	        templateUrl : "../templates/test.html"
	    };
	});*/

	

	app.service();