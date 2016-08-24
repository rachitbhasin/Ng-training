var deps = ['ui.router',
	'HomeModule',
	'ContactsModule',
	'HeaderModule'
]
var app = angular.module('myFirstApp', deps);
	
	app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
		console.log('Entered Config Block');
	    $httpProvider.interceptors.push('APIInterceptor');
	    $urlRouterProvider.otherwise('/home');

	    $stateProvider
			.state('root',{
	          url: '',
	          abstract: true,
	          views: {
	            'header':{
	              templateUrl: 'templates/header.html',
	              controller: 'HeaderController'
	            }
	          }
	        })
		.state('root.home', {
			url: '/home',
			views: {
				'main@': {
					templateUrl: 'templates/home.html',
					controller: 'HomeController'
				}
			},
			params:{
				joinDetails: null
			}
		}).state('root.contacts', {
			url: '/contacts',
			views: {
				'main@': {
					templateUrl: 'templates/contacts.html',
					controller: 'ContactsController'
				}
			},
			params:{
				joinDetails: null
			}
		});

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
	app.constant("Constants", {
			'apiUrl': 'https://jsonplaceholder.typicode.com/users'
		}
	)
	app.run(function($rootScope) {
		console.log('Entered Run Block');
	    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
	    	console.log("state change has started");
	    })
	});
