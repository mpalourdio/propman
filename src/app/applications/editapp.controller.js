'use strict';

angular.module('app')
    .controller('EditAppCtrl', function ($routeParams, Applications, $location) {
        var vm = this;

        var id = $routeParams.id;

        function gotoApplicationsList() {
            $location.path('/applications');
        }

        Applications.getAppEnv(id)
            .success(function (data) {
                vm.applicationEnvs = data;
            })
            .error(function () {
                vm.errorMessage = 'Impossible de récupérer l\'application';
            });

        vm.save = function () {
            if (id) {
                Applications.update(vm.application)
                    .success(function () {
                        gotoApplicationsList();
                    })
                    .error(function () {
                        vm.errorMessage = 'Impossible de mettre à jour l\'application'
                    });
            } else {
                Applications.add(vm.application)
                    .success(function (user) {
                        console.log('Application ajoutée id ' + application.id);
                        gotoApplicationsList();
                    })
                    .error(function () {
                        vm.errorMessage = 'Erreur lors de l\'ajout.';
                    });
            }
        };

        vm.cancel = function () {
            gotoApplicationsList();
        };
    });
