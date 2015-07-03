'use strict';

angular.module('app')
.controller('PropertieskeysCtrl', function (PropertiesKeys, Editor, AuthService, USER_ROLES) {
	var vm = this;

	vm.USER_ROLES = USER_ROLES;
	vm.AuthService = AuthService;

  vm.key = "";

  vm.application = Editor.editedObject();

  PropertiesKeys.all(vm.application.id)
	.success(function(data) { vm.propertieskeys = data; })
	.error(function() { vm.errorMessage = 'Impossible de récupérer la liste des clés de propriété'})

	vm.delete = function (propertykey) {
		if (confirm('Êtes-vous sûr de vouloir supprimer cette clé de propriété ?')) {
      Propertykey.delete(propertykey)
			.success(function(data) { /* $location ? */ })
			.error(function() { vm.errorMessage = 'Impossible de supprimer la clé de propriété'})
		}
	};

  vm.add = function () {
    var property = {id : null, key : vm.key, value : null};
    vm.propertieskeys.properties.push(property);
  }

});
