var app = angular.module('ContactsModule',[]);
	app.controller("ContactsController",function($scope,$rootScope,$location,$http,$log,$stateParams){
		console.log($stateParams);
	})