'use strict';

describe('Controller: CadastroColecaoCtrl', function () {

  // load the controller's module
  beforeEach(module('bibliotecasSystemApp'));

  var CadastroColecaoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,doc) {
    scope = $rootScope.$new();
    CadastroColecaoCtrl = $controller('CadastroColecaoCtrl', {
      $scope: scope,
      doc:doc
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
  //  //expect(scope.awesomeThings.length).toBe(3);
  //});
});
