'use strict';

angular.module('app')
  .controller('UsersCtrl', function (Users, AuthService, USER_ROLES, Editor) {
    var vm = this;

    vm.USER_ROLES = USER_ROLES;
    vm.AuthService = AuthService;

    Users.all()
      .success(function (data) {
        vm.users = data;
      })
      .error(function () {
        vm.errorMessage = 'Impossible de récupérer la liste des utilisateurs'
      });

    vm.delete = function (user) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
        Users.delete(user)
          .success(function () {
            var index = vm.users.indexOf(user);
            if (-1 != index) {
              vm.users.splice(index,1);
            }
          })
          .error(function () {
            vm.errorMessage = 'Impossible de supprimer l\'utilisateur'
          })
      }
    };

    vm.edit = function (user) {
      var path = 'edit/' + user.id;
      Editor.edit(user, path);
    }
  });
