'use strict';

angular.module('app')
.controller('EnvironmentsCtrl', function (Environments, AuthService, USER_ROLES) {
	var vm = this;

	vm.environments = Environments.all();
});
