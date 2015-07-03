'use strict';

describe('The weather view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/#/users');
    page = require('./users.po');
  });

  // beforeEach(function ($provide) {
  //   var MockUsers = function() {
  //     return {
  //       all : function() { return [ {user:'user'} ]; }
  //     };
  //   };

  //   $provide.factory("Users", MockUsers);
  // });

// beforeEach(module(function($provide) {
//   console.log('$provide', $provide);
//   $provide.factory('Users', function() {
//         this.$get = function() {
//     return {
//       all: function() { console.log('all mocked'); return [ {user:'user'} ]; }
//     };
//         };
//     });
//   }));

it('should have a list of users', function() {
//  expect(page.userList.count()).toBe(1);
});

});
