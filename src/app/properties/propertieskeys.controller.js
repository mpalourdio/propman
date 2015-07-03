'use strict';

angular.module('app')
.controller('PropertieskeysCtrl', function (PropertiesKeys, Editor, AuthService, USER_ROLES) {
	var vm = this;

	vm.USER_ROLES = USER_ROLES;
	vm.AuthService = AuthService;

  vm.key = "";

  vm.application = Editor.editedObject();

  function gotoHome() {
    $location.path('/');
  }

  PropertiesKeys.all(vm.application.id)
	.success(function(data) { vm.propertieskeys = data; })
	.error(function() { vm.errorMessage = 'Impossible de récupérer la liste des clés de propriété'})

	vm.delete = function (propertykey) {
		if (confirm('Êtes-vous sûr de vouloir supprimer cette clé de propriété ?')) {
      PropertiesKeys.delete(propertykey)
			.success(function(data) { /* $location ? */ })
			.error(function() { vm.errorMessage = 'Impossible de supprimer la clé de propriété'})
		}
	};

  vm.add = function () {
    var propertykey = {id : null, key : vm.key, value : null};
    PropertiesKeys.add(vm.application.id, propertykey)
      .success(function(data) { vm.propertieskeys.properties.push(property); })
      .error(function() { vm.errorMessage = 'Impossible d\'ajouter la clé de propriété'})
  }

    vm.return = function () {
      gotoHome();
    };
});
