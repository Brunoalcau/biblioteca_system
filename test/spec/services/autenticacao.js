'use strict';

describe('Service: autenticacao', function () {

  // load the service's module
  beforeEach(module('bibliotecasSystemApp'));

  // instantiate service
  var autenticacao;
  beforeEach(inject(function (_autenticacao_) {
    autenticacao = _autenticacao_;
  }));

  it('should do something', function () {
    expect(!!autenticacao).toBe(true);
  });

});
