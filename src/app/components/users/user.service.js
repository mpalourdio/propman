'use strict';

angular.module('app')
.factory('Users', function($http, BACKEND_URL) {

      function userIdUrl(userId) {
            return BACKEND_URL.USERS + '/' + userId;
      }

      function userUrl(user) {
            return userIdUrl(user.id);
      }

	return {
		all: function() {
                  return $http.get(BACKEND_URL.USERS);
            },

            get: function(userId) {
                  return $http.get(userIdUrl(userId));
            },

            add: function(user) {
                  return $http.post(BACKEND_URL.USERS, user);
            },

            delete: function(user) {
                  return $http.delete(userUrl(user));
            },

            update: function(user) {
                  return $http.put(userUrl(user), user);
            }
      };

});
