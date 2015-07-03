'use strict';

angular.module('app')
.filter('capitalize', function() {

	return function(str) {
		if (angular.isString(str)) {
			return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
		} else {
			return str;
		}
	};

});
