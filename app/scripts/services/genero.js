'use strict';

/**
 * @ngdoc service
 * @name bibliotecasSystemApp.genero
 * @description
 * # genero
 * Service in the bibliotecasSystemApp.
 */
angular.module('bibliotecasSystemApp')
  .service('genero', function (doc,$q) {

    var obterDocTipoGenero = function(config){
      var options = {
        view :'app/documentoPorTipo',
        option : {
          key:'GENERO',
          reduce:false
        }
      },deffend = $q.defer();
      var sucesso = function (responser) {
        config.generos =  _.pluck(responser,'value');
        deffend.resolve(config);
      },erro = function(erro){
        config.msg = erro;
        deffend.reject(config);
      };
      doc.obterDocumentosPorTipo(options).then( sucesso,erro );
      return deffend.promise;
    };
    return {
      obterDocTipoGenero :obterDocTipoGenero
    };
  });
