'use strict';

angular.module('app')
.factory('Environments', function($firebaseArray) {

	var ref = new Firebase('https://formation.firebaseio.com/environments');
	var environments = $firebaseArray(ref);
	var copy = {environments : []};
	var listLoaded = false;

	environments.$loaded(
		function(data) {
			for (var i=0; i<data.length; i++)
				copy.environments.push(data[i]);
			listLoaded = true;
			console.log(data.length + ' personnes chargées');
		},
		function(error) {
			console.log('Erreur', error);
		}
		);

	return {
		all: function() {
      		return environments; // 3-way data binding
      		return copy.environments;
      	},

      	add: function(user) {
      		var tempId = {};
      		user.$id = tempId;
      		copy.environments.push(user);
      		return environments.$add(user).then(function(ref) {
      			var id = ref.key();

      			for (var i=0; i < copy.environments.length; i++) {
      				if (copy.environments[i].$id === tempId) {
      					copy.environments[i].$id = id;
      					break;
      				}
      			}

      			return id;
      		});
      	},

      	delete: function(user) {
      		for (var i=0; i < copy.environments.length; i++) {
      			if (copy.environments[i].$id == user.$id) {
      				copy.environments.splice(i,1);
      				break;
      			}
      		}
      		environments.$remove(user).then(function(ref) {
      			console.log('Utilisateur supprimé');
      		}, function(error) {
      			console.log('Erreur lors de la suppression:', error);
      		});
      	},

      	update: function(user) {
      		for (var i=0; i < copy.environments.length; i++) {
      			if (copy.environments[i].$id == user.$id) {
      				copy.environments[i] = user;
      				break;
      			}
      		}

      		for (var i=0; i < environments.length; i++) {
      			if (environments[i].$id == user.$id) {
      				environments[i] = user;
      				environments.$save(user).then(function(ref) {
      					console.log('mis à jour');
      				}, function(error) {
      					console.log('Erreur lors de la mise à jour:', error);
      				});
      				return;
      			}
      		}
      	},

      	get: function(userId) {

      		for (var i=0; i < environments.length; i++) {
      			if (environments[i].$id == userId) {
      				return environments[i];
      			}
      		}

      		return null;
      	}
      };
  });
