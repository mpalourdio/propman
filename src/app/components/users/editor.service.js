'use strict';

angular.module('app')
  .factory('Editor', function ($location) {

    var editObj;

    return {
      edit: function (obj, location) {
        editObj = obj;
        $location.path(location);
      },
      editedObject: function () {
        return editObj;
      }
    };

  });
