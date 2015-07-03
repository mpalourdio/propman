'use strict';

angular.module('app')
    .factory('Applications', function ($http, BACKEND_URL) {

        function appIdUrl(appId) {
            return BACKEND_URL.APPLICATIONS + '/' + appId;
        }

        function appUrl(application) {
            return appIdUrl(application.id);
        }

        return {
            all: function () {
                return $http.get(BACKEND_URL.APPLICATIONS);
            },

            get: function (appId) {
                return $http.get(appIdUrl(appId));
            },

            add: function (app) {
                return $http.post(BACKEND_URL.APPLICATIONS, app);
            },

            delete: function (app) {
                return $http.delete(appUrl(app));
            },

            update: function (app) {
                return $http.put(appUrl(app), app);
            }
        };

    });
