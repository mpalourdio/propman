'use strict';

angular.module('app')
  .controller('EnvironmentsCtrl', function (Environments, AuthService, USER_ROLES, Editor) {
    var vm = this;

    vm.USER_ROLES = USER_ROLES;
    vm.AuthService = AuthService;

    Environments.all()
      .success(function (data) {
        vm.environments = data;
      })
      .error(function () {
        vm.errorMessage = 'Impossible de récupérer la liste des environnements'
      });

    vm.delete = function (env) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cet environnement ?')) {
        Environments.delete(env)
          .success(function () {
            var index = vm.environments.indexOf(env);
            if (-1 != index) {
              vm.environments.splice(index,1);
            }
          })
          .error(function () {
            vm.errorMessage = 'Impossible de supprimer l\'environnement'
          })
      }
    };

    vm.edit = function (env) {
      var path = 'editenv/' + env.id;
      Editor.edit(env, path);
    }
  });
