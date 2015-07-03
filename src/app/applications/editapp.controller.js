'use strict';

angular.module('app')
    .controller('EditAppCtrl', function ($routeParams, Applications, Environments, $location, $q) {
        var vm = this;

        var id = $routeParams.id;

        function gotoApplicationsList() {
            $location.path('/applications');
        }

        $q.all([Applications.getAppEnv(id), Environments.all()]).then(
            function (results) {
                vm.applicationEnvs = results[0].data;
                vm.allEnvs         = results[1].data;
                for (var i = 0; i < vm.allEnvs.length; i++) {
                    vm.allEnvs[i].isLinked = false;
                    for (var j = 0; j < vm.applicationEnvs.envs.length; j++) {
                        if (vm.allEnvs[i].id === vm.applicationEnvs.envs[j].id) {
                            vm.allEnvs[i].isLinked = true;
                            break;
                        }
                    }
                }
            },
            function () {
                console.log('$q a foiré :(')
            }
        );

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
    })
;
