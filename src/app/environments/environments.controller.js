'use strict';

angular.module('app')
.controller('EnvironmentsCtrl', function (Environments, AuthService, USER_ROLES) {
    var vm = this;

    vm.USER_ROLES = USER_ROLES;
    vm.AuthService = AuthService;

    Environments.all()
      .success(function(data) { vm.environments = data; })
      .error(function() { vm.errorMessage = 'Impossible de récupérer la liste des environnements'})

    vm.delete = function (user) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cet environnement ?')) {
        Environments.delete(environment)
          .success(function(data) { /* $location ? */ })
          .error(function() { vm.errorMessage = 'Impossible de supprimer l\'environnement'})
      }
    };
});
