'use strict';

describe('Controller: CadastroEditoraCtrl', function () {

  // load the controller's module
  beforeEach(module('bibliotecasSystemApp'));

  var CadastroEditoraCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,doc,$modalInstance) {
    scope = $rootScope.$new();
    CadastroEditoraCtrl = $controller('CadastroEditoraCtrl', {
      $scope: scope,
      doc:doc,
      modalInstance:$modalInstance
    });
  }));
});
