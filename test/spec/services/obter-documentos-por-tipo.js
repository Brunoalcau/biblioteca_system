'use strict';

describe('Service: obterDocumentosPorTipo', function () {

  // load the service's module
  beforeEach(module('bibliotecasSystemApp'));

  // instantiate service
  var obterDocumentosPorTipo,
    q
  ;
  beforeEach(inject(function (_obterDocumentosPorTipo_,$q) {
    obterDocumentosPorTipo= _obterDocumentosPorTipo_;
    q = $q;
  }));

  it('should do something', function () {
    expect(!!obterDocumentosPorTipo).toBe(true);
  });

});
