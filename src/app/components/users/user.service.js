'use strict';

angular.module('app')
.factory('Users', function($http, BACKEND_URL) {

	return {
		all: function() {
                  return $http.get(BACKEND_URL.USERS);
            },

            add: function(user) {
                  return $http.post(BACKEND_URL.USERS);
            },

            delete: function(user) {
                  return $http.delete(BACKEND_URL.USERS);
            },

            update: function(user) {
                  return $http.put(BACKEND_URL.USERS);
            },

            get: function(userId) {
                  return $http.get(BACKEND_URL.USERS + '/' + userId);
            }
      };

});
