'use strict';

describe('Service: genero', function () {

  // load the service's module
  beforeEach(module('bibliotecasSystemApp'));

  // instantiate service
  var genero,
    q
  ;
  beforeEach(inject(function (_genero_,$q) {
    genero = _genero_;
    q = $q;
  }));

  it('should do something', function () {
    expect(!!genero).toBe(true);
  });

});
