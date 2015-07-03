'use strict';

angular.module('app')
.directive('access', function (AuthService, USER_ROLES) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {

      console.log('Access directive att.access=', attrs.access);
      console.log('Access directive att.access=admin', attrs.access === USER_ROLES.admin);
      console.log('Access directive AuthService isAdmin=', AuthService.isAdmin());

      var roles = attrs.access;
      if (!angular.isArray(roles)) {
        roles = [roles];
      }

      console.log('Access directive roles', roles);

      if (roles.indexOf(USER_ROLES.admin) >= 0 && !AuthService.isAdmin())
        element.addClass('hidden');
    }
  };
});
