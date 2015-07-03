'use strict';

angular.module('app')
    .controller('ApplicationsCtrl', function (Users, AuthService, USER_ROLES, Applications) {
        var vm = this;

        vm.USER_ROLES  = USER_ROLES;
        vm.AuthService = AuthService;

        Applications.all()
            .success(function (data) {
                vm.applications = data;
            })
            .error(function () {
                vm.errorMessage = 'Impossible de récupérer la liste des utilisateurs'
            })

    });
