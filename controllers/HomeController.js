var app = angular.module('HomeModule',[]);
	app.controller("HomeController",function($scope,$rootScope,$location,$http){
		$scope.name = "";
		$scope.persons = [
				{id:0,name:'Arvind',age:26},
				{id:1,name:'Rachit',age:26},
				{id:2,name:'Ajay',age:24},
				{id:3,name:'Amit',age:30}
			]
		$scope.users = [];
		$http.get("https://jsonplaceholder.typicode.com/users").then(function(response) {
	        $scope.users = response.data;
	    });

		$scope.myArr = [42, 42, 43, 43];
		$rootScope.test = 'testing';
		$scope.search = function(p){
			if((p.name.toLowerCase()).indexOf($scope.name.toLowerCase()) != -1){
				return true
			}else if($scope.name == ""){
				return true
			}else{
				return false;
			}
			
		}
		console.log($location.absUrl());
		$scope.selectItem = function(i){
			$scope.selected = i.name;
		}
	});

	app.directive('float', function(){
	    return {
	        require: 'ngModel',
	        link: function(scope, ele, attr, ctrl){
	            ctrl.$parsers.unshift(function(viewValue){
	                return parseFloat(viewValue, 10);
	            });
	        }
	    };
	});

	app.directive('allowPattern', [allowPatternDirective]);

	function allowPatternDirective() {
		return {
			restrict: "A",
			compile: function(tElement, tAttrs) {
				return function(scope, element, attrs) {
	        // I handle key events
					element.bind("keypress", function(event) {
						var keyCode = event.which || event.keyCode; // I safely get the keyCode pressed from the event.
						if(keyCode == 37 || keyCode == 39 || keyCode == 8 || keyCode == 46) { // Left / Right Arrow, Backspace, Delete keys
							return;
						}
						var keyCodeChar = String.fromCharCode(keyCode); // I determine the char from the keyCode.
	          
	          // If the keyCode char does not match the allowed Regex Pattern, then don't allow the input into the field.
						if (!keyCodeChar.match(new RegExp(attrs.allowPattern, "i"))) {
	            event.preventDefault();
							return false;
						}
	          
					});
				};
			}
		};
	}
	