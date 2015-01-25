'use strict';

describe('Controller: CadastroLivroCtrl', function () {

  // load the controller's module
  beforeEach(module('bibliotecasSystemApp'));

  var CadastroLivroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,doc,obterDocumentosPorTipo,modal) {
    scope = $rootScope.$new();
    CadastroLivroCtrl = $controller('CadastroLivroCtrl', {
      $scope: scope,
      doc : doc,
      obterDocumentosPorTipo:obterDocumentosPorTipo,
      modal:modal
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    // expect(scope.awesomeThings.length).toBe(3);
  });
});
