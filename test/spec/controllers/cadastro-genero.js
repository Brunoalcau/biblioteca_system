'use strict';

describe('Controller: CadastroGeneroCtrl', function () {

  // load the controller's module
  beforeEach(module('bibliotecasSystemApp'));

  var CadastroGeneroCtrl,
    scope,
    modalInstance;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadastroGeneroCtrl = $controller('CadastroGeneroCtrl', {
      $scope: scope,
      $modalInstance : modalInstance
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    // expect(scope.awesomeThings.length).toBe(3);
  });
});
