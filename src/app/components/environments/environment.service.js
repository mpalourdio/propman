'use strict';

angular.module('app')
  .factory('Environments', function($http, BACKEND_URL) {

    return {
      all: function() {
        return $http.get(BACKEND_URL.ENVIRONMENTS);
      },

      add: function(environment) {
        return $http.post(BACKEND_URL.ENVIRONMENTS);
      },

      delete: function(environment) {
        return $http.delete(BACKEND_URL.ENVIRONMENTS);
      },

      update: function(environment) {
        return $http.put(BACKEND_URL.ENVIRONMENTS);
      },

      get: function(environmentId) {
        return $http.get(BACKEND_URL.ENVIRONMENTS + '/' + environmentId);
      }
    };

  });
