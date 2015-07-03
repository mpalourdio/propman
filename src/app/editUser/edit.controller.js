'use strict';

angular.module('app')
  .controller('EditCtrl', function (Editor, Users, $location) {
    var vm = this;

    function gotoUsersList() {
      $location.path('/users');
    }

    vm.user = Editor.editedObject();

    vm.save = function () {
      if (vm.user.id) {
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
