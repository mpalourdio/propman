'use strict';

angular.module('app')
.controller('AboutCtrl', function ($http, $scope) {
	var vm = this;

	vm.message = 'It works!';
	vm.city = 'Geneve';
	vm.previousCity = '';

	var url = 'http://api.openweathermap.org/data/2.5/weather?q=';

	vm.keyDown = function(event) {
		if (event.keyCode === 13) {
		 	vm.search();
		}
	};

	$scope.$watch('vm.city', function () {
		vm.search();
    });

	vm.search = function() {
		if (!vm.city) return;

		if (vm.city === vm.previousCity) return;
		vm.previousCity = vm.city;

		$http.get(url + vm.city)
		.success(function(data) {
			vm.response = data;
		})
		.error(function(data, status) {
			vm.error = status;
		});
	};

	vm.search();
});
