'use strict';

angular.module('app')
.controller('EnvironmentsCtrl', function (Environments, AuthService, USER_ROLES) {
	var vm = this;

	//vm.environments = Environments.all();
    vm.environments = [{
      shortname:"Prod",
      longname: "Production"
    },
    {
      shortname:"Valid",
      longname: "Validation"
    },
    {
      shortname:"Int",
      longname: "Intégration"
    },
    ]
});
