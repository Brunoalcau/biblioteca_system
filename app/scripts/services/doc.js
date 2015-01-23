/*jshint -W055 */
'use strict';

/**
 * @ngdoc service
 * @name bibliotecasSystemApp.doc
 * @description
 * # doc
 * Service in the bibliotecasSystemApp.
 */
angular.module('bibliotecasSystemApp')
  .service('doc', function ($http,pouchDB,$q) {
  	var db = new pouchDB('http://localhost:5984/biblioteca');

	var salvar = function(doc){
    return db.post(doc);
	};

  var obterDocumentosPorTipo= function(options){
    var deferred = $q.defer();
    db.query(options.view,options.option,function(erro, resposta){
          if(erro){
            deferred.reject(erro);
          }else{
            deferred.resolve(resposta.rows);
          }
      });
    return deferred.promise;
  } ;

  	return {
  		salvar : salvar,
      obterDocumentosPorTipo: obterDocumentosPorTipo
  	};
  });
