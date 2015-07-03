'use strict';

angular.module('app').constant('USER_ROLES', {
	guest: 'guest',
	exploitant: 'exploitant',
	dev: 'dev',
	admin: 'admin'
});

angular.module('app')
.factory('AuthService', function(USER_ROLES) {
	var currentLogin = 'admin';
	var currentRole = USER_ROLES.admin;

	return {
		login : function(login, password) {
			// Requête en base, validation mot de passe et récupération du rôle...
			currentLogin = login;
			currentRole = login === 'admin' ? USER_ROLES.admin : USER_ROLES.user;
		},

		logout : function() {
			currentLogin = undefined;
			currentRole = undefined;
		},

		isLoggedIn : function() {
			return currentLogin !== undefined;
		},

		isAdmin : function() {
			return currentRole === USER_ROLES.admin;
		},

		loginNeeded : function(access) {
			return access !== undefined && !this.isLoggedIn();
		},

		accessForbidden : function(access) {
			if (angular.isArray(access) && access.indexOf(USER_ROLES.admin) >= 0)
				return !this.isAdmin();
			return false;
		}
	};
});
