'use strict';

describe('Controller: ModalCloseCtrl', function () {

  // load the controller's module
  beforeEach(module('bibliotecasSystemApp'));

  var ModalCloseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalCloseCtrl = $controller('ModalCloseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    // expect(scope.awesomeThings.length).toBe(3);
  });
});
