'use strict';

angular.module('app')
.controller('UsersCtrl', function (Users, AuthService, USER_ROLES) {
	var vm = this;

	vm.USER_ROLES = USER_ROLES;
	vm.AuthService = AuthService;
	
	vm.users = Users.all();
});
