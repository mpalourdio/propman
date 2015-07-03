'use strict';

angular.module('app')
  .factory('PropertiesValues', function($http, BACKEND_URL) {

    function propertiesKeysUrl(envId) {
      return BACKEND_URL.PROPERTIES + '/' + envId + '/values';
    }

    function propertyKeyUrl(envId, property) {
      return BACKEND_URL.PROPERTIES + '/' + envId + '/values' + (property.id);
    }

    return {
      all: function(applicationId) {
        return $http.get(propertiesKeysUrl(applicationId));
      },

      add: function(applicationId, propertykey) {
        return $http.post(propertiesKeysUrl(applicationId), propertykey);
      },

      delete: function(applicationId, propertykey) {
        return $http.delete(propertyKeyUrl(applicationId, propertykey));
      },
    };

  });
