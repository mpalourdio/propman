'use strict';

angular.module('app')
  .controller('EditenvCtrl', function ($routeParams, Environments, $location) {
    var vm = this;

    var id = $routeParams.id;

    function gotoEnvironmentsList() {
      $location.path('/environments');
    }

    Environments.get(id)
      .success(function(data) { vm.environment = data; })
      .error(function() { vm.errorMessage = 'Impossible de récupérer l\'utilisateur'});

    vm.save = function () {
      if (id) {
        Environments.update(vm.environment);
        gotoEnvironmentsList();
      } else {
        Environments.add(vm.environment).then(function (id) {
          console.log('Personne ajoutée id ' + id);
          gotoEnvironmentsList();
        }, function (error) {
          console.log('Erreur lors de l\'ajout:', error);
        });
      }
    };

    vm.cancel = function () {
      gotoEnvironmentsList();
    };

  });
