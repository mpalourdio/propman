'use strict';

angular.module('app')
  .controller('EditenvCtrl', function ($routeParams, Environments, $location) {
    var vm = this;

    var id = $routeParams.id;

    function gotoenvironmentsList() {
      $location.path('/environments');
    }

    //vm.environment = angular.copy(environments.get(id)) || {};

    vm.save = function () {
      /*if (id) {
        environments.update(vm.environment);
        gotoenvironmentsList();
      } else {
        vm.environment.environmentname = vm.environment.name.first;
        vm.environment.location = {
          street: 'Avenue de Longemalle 1',
          zip: '1020',
          city: 'Renens',
          state: 'VD'
        };
        vm.environment.phone = '021 534 90 02';
        vm.environment.picture = {
          "large": "http://api.randomenvironment.me/portraits/men/1.jpg",
          "medium": "http://api.randomenvironment.me/portraits/med/men/1.jpg",
          "thumbnail": "http://api.randomenvironment.me/portraits/thumb/men/1.jpg"
        };

        environments.add(vm.environment).then(function (id) {
          console.log('Personne ajoutée id ' + id);
          gotoenvironmentsList();
        }, function (error) {
          console.log('Erreur lors de l\'ajout:', error);
        });
      }*/
    };

    vm.cancel = function () {
      gotoenvironmentsList();
    };

  });
