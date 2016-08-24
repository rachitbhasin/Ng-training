var app = angular.module('HeaderModule',[]);
	app.controller("HeaderController",function($scope,$rootScope,$log,$state){
		$scope.navigate = function(state){
			$state.go(state, {joinDetails:'i just sent some data'});
		}
	})