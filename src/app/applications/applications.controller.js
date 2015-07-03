'use strict';

angular.module('app')
    .controller('ApplicationsCtrl', function (Users, AuthService, USER_ROLES) {
        var vm = this;

        vm.USER_ROLES = USER_ROLES;
        vm.AuthService = AuthService;

        vm.applications = Users.all();
        vm.applications = [{
            name:        "gpecs",
            logo:        "http://www.sirrix.com/media/images/60452.png",
            description: "Application qui ne fait rien"
        },
            {
                name:        "test",
                logo:        "http://www.sirrix.com/media/images/60452.png",
                description: "Application qui ne fait"
            },
        ]
    });
