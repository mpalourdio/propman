'use strict';

angular.module('app')
.controller('DetailCtrl', function ($routeParams, Users, $location, USER_ROLES) {
	var vm = this;

	var id = $routeParams.id;
	
	vm.user = Users.get(id);
	vm.USER_ROLES = USER_ROLES;

	vm.delete = function() {
		if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
			Users.delete(vm.user);
			$location.path('/users');
		}
	}

});
