'use strict';

describe('Controller: CadastroPeriodicoCtrl', function () {

  // load the controller's module
  beforeEach(module('bibliotecasSystemApp'));

  var CadastroPeriodicoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadastroPeriodicoCtrl = $controller('CadastroPeriodicoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
