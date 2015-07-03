'use strict';

angular.module('app')
.controller('NavbarCtrl', function ($scope, $location, AuthService) {
	var vm = this;

	vm.AuthService = AuthService;
	
	vm.isActive = function (viewLocation) {
		return viewLocation === $location.path();
	};
});
