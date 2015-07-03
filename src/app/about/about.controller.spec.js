'use strict';

describe('About controller', function(){
  // initialise le module de notre application
  beforeEach(module('app'));
  
  var scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  var createController;

  beforeEach(inject(function($injector) {
    // $controller permet de fabriquer des controller
    var $controller = $injector.get('$controller');

    // la méthode createController créé un AboutCtrl
    createController = function() {
      // On pourrait passer des dépendances simulacres ici
      return $controller('AboutCtrl', {$scope : scope});
    };
  }));

  it('should have a city', function() {
    var vm = createController();
    expect(vm.city).toBeDefined();
  });

  // Nouvelle section de tests, spécifique aux tests sur $http
  describe('http requests', function(){
    var $httpBackend;

    beforeEach(inject(function($injector) {
      // on récupère le faux $http
      $httpBackend = $injector.get('$httpBackend');
    }));

    afterEach(function() {
      // à la fin de chaque test, vérifie que tous les expect() ont bien été appelés
      $httpBackend.verifyNoOutstandingExpectation();
      // et qu'il n'y a pas de requête non terminée
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should send a request on creation', function() {
     $httpBackend.expectGET(/http:\/\/api.openweathermap.org.*/).respond(200, {});
     createController();
     $httpBackend.flush();
   });

    it('should store the GET response', function() {
     $httpBackend.expectGET(/http:\/\/api.openweathermap.org.*/).respond(200, 'my data');
     var vm = createController();
     $httpBackend.flush();
     expect(vm.response).toBe('my data');
   });

    it('should display an error when GET fails', function() {
     $httpBackend.whenGET(/http:\/\/api.openweathermap.org.*/).respond(404, {});
     var vm = createController();
     $httpBackend.flush();
     expect(vm.error).toBe(404);
   });

    it('should send a new request when search() is called', function() {
     $httpBackend.whenGET(/http:\/\/api.openweathermap.org.*/).respond(200, {});
     var vm = createController();
     $httpBackend.expectGET(/http:\/\/api.openweathermap.org.*/).respond(200, {});
     vm.search();
     $httpBackend.flush();
   });

    it('should put the searched city at the end of the requested URL', function() {
      $httpBackend.whenGET(/http:\/\/api.openweathermap.org.*/).respond(200, {});
      var vm = createController();
      var city = 'Honolulu';
      vm.city = city;
      vm.search();
      var re = new RegExp('http://api.openweathermap.org.*' + city, 'g');
      $httpBackend.expectGET(re).respond(200, {});
      $httpBackend.flush();
    });

    it('should not send request when the city is empty', function() {
      $httpBackend.expectGET(/http:\/\/api.openweathermap.org.*/).respond(200, {});
      var vm = createController();
      $httpBackend.flush();
      
      vm.city = '';
      // No when or expect
      vm.search();
    });

    it('should not send request when the city is the same', function() {
      $httpBackend.whenGET(/http:\/\/api.openweathermap.org.*/).respond(200, {});
      var vm = createController();
      $httpBackend.flush();
      
      $httpBackend.expectGET(/http:\/\/api.openweathermap.org.*q=Marseille/).respond(200, 'data');
      vm.city = 'Marseille';
      vm.search();
      $httpBackend.flush();
      expect(vm.response).toBe('data');

      // Deuxieme appel, avec la même ville, pas de requête émise
      vm.search();
      expect(vm.response).toBe('data');
    });

  });

});
