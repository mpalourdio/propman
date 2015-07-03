'use strict';

angular.module('app')
  .factory('PropertiesKeys', function($http, BACKEND_URL) {

    function propertiesKeysUrl(applicationId) {
      return BACKEND_URL.PROPERTIES + '/' + applicationId + '/keys';
    }

    function propertyKeyUrl(applicationId, propertykey) {
      return BACKEND_URL.PROPERTIES + '/' + applicationId + '/keys/' + (propertykey.id);
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
