'use strict';

angular.module('app')
.factory('Users', function($firebaseArray) {

	var ref = new Firebase('https://formation.firebaseio.com/users');
	var users = $firebaseArray(ref);
	var copy = {users : []};
	var listLoaded = false;

	users.$loaded(
		function(data) {
			for (var i=0; i<data.length; i++)
				copy.users.push(data[i]);
			listLoaded = true;
			console.log(data.length + ' personnes chargées');
		},
		function(error) { 
			console.log('Erreur', error); 
		}
		);

	return {
		all: function() {
      		return users; // 3-way data binding
      		return copy.users;
      	},

      	add: function(user) {
      		var tempId = {};
      		user.$id = tempId;
      		copy.users.push(user);
      		return users.$add(user).then(function(ref) { 
      			var id = ref.key();

      			for (var i=0; i < copy.users.length; i++) {
      				if (copy.users[i].$id === tempId) {
      					copy.users[i].$id = id;
      					break;
      				}
      			}

      			return id;
      		});
      	},

      	delete: function(user) {
      		for (var i=0; i < copy.users.length; i++) {
      			if (copy.users[i].$id == user.$id) {
      				copy.users.splice(i,1);
      				break;
      			}
      		}
      		users.$remove(user).then(function(ref) {
      			console.log('Utilisateur supprimé');
      		}, function(error) {
      			console.log('Erreur lors de la suppression:', error);
      		});
      	},

      	update: function(user) {
      		for (var i=0; i < copy.users.length; i++) {
      			if (copy.users[i].$id == user.$id) {
      				copy.users[i] = user;
      				break;
      			}
      		}

      		for (var i=0; i < users.length; i++) {
      			if (users[i].$id == user.$id) {
      				users[i] = user;
      				users.$save(user).then(function(ref) {
      					console.log('mis à jour');
      				}, function(error) {
      					console.log('Erreur lors de la mise à jour:', error);
      				});
      				return;
      			}
      		}
      	},

      	get: function(userId) {
      		
      		for (var i=0; i < users.length; i++) {
      			if (users[i].$id == userId) {
      				return users[i];
      			}
      		}

      		return null;
      	}
      };
  });
