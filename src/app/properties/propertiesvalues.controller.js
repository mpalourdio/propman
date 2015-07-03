'use strict';

angular.module('app')
.controller('PropertiesvaluesCtrl', function (Propertiesvalues, AuthService, USER_ROLES) {
	var vm = this;

	vm.USER_ROLES = USER_ROLES;
	vm.AuthService = AuthService;

  Propertiesvalues.all()
	.success(function(data) { vm.propertieskeys = data; })
	.error(function() { vm.errorMessage = 'Impossible de récupérer la liste des clés de propriété'})

	vm.delete = function (propertykey) {
		if (confirm('Êtes-vous sûr de vouloir supprimer cette clé de propriété ?')) {
      Propertykey.delete(propertykey)
			.success(function(data) { /* $location ? */ })
			.error(function() { vm.errorMessage = 'Impossible de supprimer la clé de propriété'})
		}
	};

});
