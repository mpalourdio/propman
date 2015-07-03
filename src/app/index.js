'use strict';

angular.module('app', ['ngRoute', 'firebase', 'ui.bootstrap']);

angular.module('app')
.config(function ($routeProvider, USER_ROLES) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/main/main.html',
    controller: 'MainCtrl',
    controllerAs: 'vm'
  })
  .when('/about', {
    templateUrl: 'app/about/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'vm'
  })
  .when('/users', {
    templateUrl: 'app/users/users.html',
    controller: 'UsersCtrl',
    controllerAs: 'vm'
  })
  .when('/detail/:id', {
    templateUrl: 'app/detail/detail.html',
    controller: 'DetailCtrl',
    controllerAs: 'vm',
    access : [ USER_ROLES.any ]
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
