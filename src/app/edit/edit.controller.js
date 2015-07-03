'use strict';

angular.module('app')
  .controller('EditCtrl', function ($routeParams, Users, $location) {
    var vm = this;

    var id = $routeParams.id;

    function gotoUsersList() {
      $location.path('/users');
    }


    Users.get(id)
      .success(function (data) {
        vm.user = data;
      })
      .error(function () {
        vm.errorMessage = 'Impossible de récupérer l\'utilisateur'
      });

    vm.save = function () {
      if (id) {
        Users.update(vm.user)
          .success(function () {
            gotoUsersList();
          })
          .error(function () {
            vm.errorMessage = 'Impossible de mettre à jour l\'utilisateur'
          });
      } else {
        Users.add(vm.user)
          .success(function (user) {
            console.log('Personne ajoutée id ' + user.id);
            gotoUsersList();
          })
          .error(function () {
            vm.errorMessage = 'Erreur lors de l\'ajout.';
          });
      }
    };

    vm.cancel = function () {
      gotoUsersList();
    };

  });
