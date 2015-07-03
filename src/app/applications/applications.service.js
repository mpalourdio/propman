'use strict';

angular.module('app')
    .factory('Applications', function ($http, BACKEND_URL) {

        function appIdUrl(appId) {
            return BACKEND_URL.APPLICATIONS + '/' + appId;
        }

        function appEnv(appId) {
            return BACKEND_URL.APPLICATIONS + '/' + appId + '/env';
        }

        function appUrl(application) {
            return appIdUrl(application.id);
        }

        return {
            all: function () {
                return $http.get(BACKEND_URL.APPLICATIONS);
            },


            add: function (app) {
                return $http.post(BACKEND_URL.APPLICATIONS, app);
            },

            getAppEnv: function (appId) {
                return $http.get(appEnv(appId));
            },

            updateAppEnv: function (appId, envs) {
                return $http.post(appEnv(appId), envs);
            },

            delete: function (app) {
                return $http.delete(appUrl(app));
            },

            update: function (app) {
                return $http.put(appUrl(app), app);
            }
        };

    });
