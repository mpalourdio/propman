'use strict';

angular.module('app')
.controller('UsersCtrl', function (Users, AuthService, USER_ROLES) {
	var vm = this;

	vm.USER_ROLES = USER_ROLES;
	vm.AuthService = AuthService;

	Users.all()
	.success(function(data) { vm.users = data; })
	.error(function() { vm.errorMessage = 'Impossible de récupérer la liste des utilisateurs'});

	vm.delete = function (user) {
		if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
			Users.delete(user)
			.success(function(data) { /* $location ? */ })
			.error(function() { vm.errorMessage = 'Impossible de supprimer l\'utilisateur'})
		}
	};
});
