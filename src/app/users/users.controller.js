'use strict';

angular.module('app')
  .controller('UsersCtrl', function (Users, AuthService, USER_ROLES) {
    var vm = this;

    vm.USER_ROLES = USER_ROLES;
    vm.AuthService = AuthService;

    vm.users = Users.all();

    vm.delete = function (user) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
        Users.delete(user);
        $location.path('/users');
      }
    };
  });
