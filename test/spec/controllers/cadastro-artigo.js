'use strict';

describe('Controller: CadastroArtigoCtrl', function () {

  // load the controller's module
  beforeEach(module('bibliotecasSystemApp'));

  var CadastroArtigoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadastroArtigoCtrl = $controller('CadastroArtigoCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   // expect(scope.awesomeThings.length).toBe(3);
  // });
});
