'use strict';

angular.module('app')
.directive('access', function (AuthService, USER_ROLES) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {

      var roles = attrs.access;
      if (!angular.isArray(roles)) {
        roles = [roles];
      }

      if (roles.indexOf(USER_ROLES.admin) >= 0 && !AuthService.isAdmin())
        element.addClass('hidden');
    }
  };
});
