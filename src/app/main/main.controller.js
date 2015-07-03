'use strict';

angular.module('app')
  .controller('MainCtrl', function (AuthService, Applications, Editor) {
    var vm = this;

    Applications.all()
      .success(function (data) {
        vm.applications = data;
      })
      .error(function () {
        vm.errorMessage = 'Impossible de récupérer la liste des applications'
      })

    vm.edit = function (application) {
      var path = 'propertieskeys/' + application.id;
      Editor.edit(application, path);
    }
  });
