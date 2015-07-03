'use strict';

angular.module('app')
.controller('EditCtrl', function ($routeParams, Users, $location) {
	var vm = this;

	var id = $routeParams.id;

	vm.user = angular.copy(Users.get(id)) || {};

	vm.save = function() {
		if (id) {
			Users.update(vm.user);
			$location.path('/detail/' + vm.user.$id);
		} else {
			vm.user.username = vm.user.name.first;
			vm.user.location = {
				street: 'Avenue de Longemalle 1',
				zip: '1020',
				city: 'Renens',
				state: 'VD'
			};
			vm.user.phone = '021 534 90 02';
			vm.user.picture = {
				"large" : "http://api.randomuser.me/portraits/men/1.jpg",
				"medium" : "http://api.randomuser.me/portraits/med/men/1.jpg",
				"thumbnail" : "http://api.randomuser.me/portraits/thumb/men/1.jpg"
			};

			Users.add(vm.user).then(function(id) {
				console.log('Personne ajoutée id ' + id);
				$location.path('/detail/' + id);
			}, function(error) {
				console.log('Erreur lors de l\'ajout:', error);
			});
		}
	};

	vm.cancel = function() {
		$location.path('/users');
	};

});
