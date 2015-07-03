'use strict';

angular.module('app')
    .controller('EditAppCtrl', function ($routeParams, Applications, Environments, $location, $q, Editor) {
        var vm         = this;
        var id         = $routeParams.id;
        vm.application = Editor.editedObject();

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
            var checkedEnvsIds = vm.allEnvs.filter(function (env) {
                return env.isLinked;
            }).map(function (env) {
                return env.id
            });

            $q.all(
                [
                    Applications.update(vm.application),
                    Applications.updateAppEnv(id, checkedEnvsIds)
                ]).then(function () {
                    gotoApplicationsList();
                },
                function (error) {
                    console.log('error $q2');
                });
        };

        vm.cancel = function () {
            gotoApplicationsList();
        };
    })
;
