'use strict';

angular.module('app')
  .factory('Environments', function($http, BACKEND_URL) {

    function environmentIdUrl(environmentId) {
      return BACKEND_URL.ENVIRONMENTS + '/' + environmentId;
    }

    function environmentUrl(environment) {
      return environmentIdUrl(environment.id);
    }

    return {
      all: function() {
        return $http.get(BACKEND_URL.ENVIRONMENTS);
      },

      get: function(environmentId) {
        return $http.get(environmentIdUrl(environmentId));
      },

      add: function(environment) {
        return $http.post(BACKEND_URL.ENVIRONMENTS, environment);
      },

      delete: function(environment) {
        return $http.delete(environmentUrl(environment));
      },

      update: function(environment) {
        return $http.put(environmentUrl(environment), environment);
      }
    };

  });
