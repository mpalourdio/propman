'use strict';

angular.module('app')
.controller('LoginCtrl', function (AuthService) {
	var vm = this;

	vm.AuthService = AuthService;

	vm.logIn = function() {
		if (vm.login && vm.password && vm.password.length > 0) {
			AuthService.login(vm.login);
		}
	};
});
