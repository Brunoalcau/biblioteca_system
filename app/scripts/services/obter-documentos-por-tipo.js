'use strict';

/**
 * @ngdoc service obter documentos de um view onde e consultado pela key tipo documento
 * @name bibliotecasSystemApp.genero
 * @description
 * # genero
 * Service in the bibliotecasSystemApp.
 */
angular.module('bibliotecasSystemApp')
  .service('obterDocumentosPorTipo', function (doc,$q) {

    var autores = function(config){
      var options  = {
        view :'app/documentoPorTipo',
        attr:'autores',
        option : {
          key:'AUTOR',
          reduce:false
        }
      };
      return obterDocumentos(config,options);
    };

    var generos = function(config){
      var options  = {
        view :'app/documentoPorTipo',
        attr:'generos',
        option : {
          key:'GENERO',
          reduce:false
        }
      };
      return obterDocumentos(config,options);
    };

    var editoras= function(config){
      var options  = {
        view :'app/documentoPorTipo',
        attr:'editoras',
        option : {
          key:'EDITORA',
          reduce:false
        }
      };
     return obterDocumentos(config,options);
    };


    var colecoes = function(config){
      var options = {
          view : 'app/documentoPorTipo',
          attr: 'colecoes',
          option : {
            key:'COLECAO',
            reduce:false
          }
      };
      return obterDocumentos(config,options);
    };

    var obterDocumentos = function(config , options){
      var deffend = $q.defer();

      var sucesso = function (responser) {
        config[options.attr] =  _.pluck(responser,'value');
        deffend.resolve(config);
      },
      erro = function(erro){
        config.msg = erro;
        deffend.reject(config);
      };
      doc.obterDoc(options).then( sucesso,erro );
      return deffend.promise;
    };


    return {
      autores  :autores,
      generos : generos,
      editoras:editoras,
      colecoes : colecoes

    };
  });
