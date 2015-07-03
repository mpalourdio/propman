'use strict';

angular.module('app')
    .controller('ApplicationsCtrl', function (Users, AuthService, USER_ROLES, Applications, Editor) {
        var vm = this;

        vm.USER_ROLES  = USER_ROLES;
        vm.AuthService = AuthService;

        Applications.all()
            .success(function (data) {
                vm.applications = data;
                console.log(data);
            })
            .error(function () {
                vm.errorMessage = 'Impossible de récupérer la liste des utilisateurs'
            });

        vm.edit = function (application) {
            var path = 'editapp/' + application.id;
            Editor.edit(application, path);
        }
    });
