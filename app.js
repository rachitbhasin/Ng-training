var app = angular.module('myFirstApp',['HomeModule']);
	
	app.config(function($httpProvider) {
		console.log('Entered Config Block');
	    $httpProvider.interceptors.push('APIInterceptor');
	});

	app.directive("testD", function() {
	    return {
	    	restrict: 'EA',
	        templateUrl : "test.html"
	    };
	});

	app.service('APIInterceptor', function($rootScope) {
	    var service = this;
	    console.log("Entered APIInterceptor");
	    service.response = function(response) {
	       console.log('response');
	       //response.data.records.push({'City':'CHD','Country':'IND','Name':'Rachit'});
	       return response;
	    };
	    service.request = function(request) {
	       console.log("request");
	       return request;
	    };
	    
	    service.requestError = function(request) {
	       console.log("requestError");
	       return request;
	    };
	    
	    service.responseError = function(response) {
	       console.log("responseError");
	       return response;
	    };
	});

	app.run(function() {
		console.log('Entered Run Block');
	    //$httpProvider.interceptors.push('APIInterceptor');
	});
