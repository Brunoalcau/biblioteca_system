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

    var config = {
      dev :'http://localhost:5984/biblioteca',
      prod : 'https://brunoalcau.cloudant.com/biblioteca'
    },db = new pouchDB(config.prod);

	var salvar = function(doc){
    return db.post(doc);
	};

  var obterDoc= function(options){
    var deferred = $q.defer();
    db.query(options.view,options.option,function(erro, resposta){
          if(erro){
            deferred.reject(erro);
          }else{
            deferred.resolve(resposta.rows);
          }
      });
    return deferred.promise;
  };

  var getUsuario = function(usuario){
      return $http.get('/usuarios/'+usuario.nome);
  };

  return {
    salvar : salvar,
    obterDoc: obterDoc,
    getUsuario:getUsuario
  };
  });
