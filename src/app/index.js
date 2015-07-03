'use strict';

angular.module('app', ['ngRoute', 'ui.bootstrap']);

angular.module('app')
.config(function ($routeProvider, USER_ROLES) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/main/main.html',
    controller: 'MainCtrl',
    controllerAs: 'vm'
  })
  .when('/users', {
    templateUrl: 'app/users/users.html',
    controller: 'UsersCtrl',
    controllerAs: 'vm'
  })
  .when('/edit/:id?', {
    templateUrl: 'app/edit/edit.html',
    controller: 'EditCtrl',
    controllerAs: 'vm',
    access : [ USER_ROLES.admin ]
  })
  .when('/login', {
    templateUrl: 'app/login/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'vm'
  })
  .when('/applications/', {
    templateUrl: 'app/applications/applications.html',
    controller: 'ApplicationsCtrl',
    controllerAs: 'vm'
  })
  .when('/applications/:action/:appid', {
    templateUrl: 'app/applications/edit.html',
    controller: 'ApplicationsCtrl',
    controllerAs: 'vm'
  })
  .when('/environments', {
    templateUrl: 'app/environments/environments.html',
    controller: 'EnvironmentsCtrl',
    controllerAs: 'vm'
  })
  .when('/editenv/:id?', {
    templateUrl: 'app/editenv/edit.html',
    controller: 'EditenvCtrl',
    controllerAs: 'vm'
  })
  .otherwise({
    redirectTo: '/'
  });
});

angular.module('app').run(function($rootScope, $location, AuthService) {
  $rootScope.$on('$routeChangeStart', function (event, nextRoute) {

    var access = nextRoute.access;

    if (AuthService.loginNeeded(access)) {
      $location.path('/login').replace();
    }

   if (AuthService.accessForbidden(access)) {
     $location.path('/notAuthorised').replace();
   }
  })
});
