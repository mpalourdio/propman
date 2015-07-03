'use strict';

angular.module('app')
    .controller('EditAppCtrl', function (Users, $routeParams, Applications) {
        var vm = this;

        var id = $routeParams.id;

        function gotoApplicationsList() {
            $location.path('/application');
        }

        Applications.get(id)
            .success(function (data) {
                vm.application = data;
            })
            .error(function () {
                vm.errorMessage = 'Impossible de récupérer l\'application'
            });

        vm.save = function () {
            if (id) {
                Applications.update(vm.application);
                gotoApplicationsList();
            } else {
                Applications.add(vm.application).then(function (id) {
                    console.log('Application ajoutée id ' + id);
                    gotoApplicationsList();
                }, function (error) {
                    console.log('Erreur lors de l\'ajout:', error);
                });
            }
        };

        vm.cancel = function () {
            gotoApplicationsList();
        };


    });
