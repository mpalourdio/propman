'use strict';

angular.module('app')
  .controller('EditCtrl', function ($routeParams, Users, $location) {
    var vm = this;

    var id = $routeParams.id;

    function gotoUsersList() {
      $location.path('/users');
    }


    Users.get(id)
      .success(function(data) { vm.user = data; })
      .error(function() { vm.errorMessage = 'Impossible de récupérer l\'utilisateur'});

    vm.save = function () {
      if (id) {
        Users.update(vm.user);
        gotoUsersList();
      } else {
        Users.add(vm.user).then(function (id) {
          console.log('Personne ajoutée id ' + id);
          gotoUsersList();
        }, function (error) {
          console.log('Erreur lors de l\'ajout:', error);
        });
      }
    };

    vm.cancel = function () {
      gotoUsersList();
    };

  });
