'use strict';

/**
 * @ngdoc service
 * @name bibliotecasSystemApp.autenticacao
 * @description
 * # autenticacao
 * Service in the bibliotecasSystemApp.
 */
angular.module('bibliotecasSystemApp')
  .service('autenticacao', function (doc,$q,Session) {
    var autenticacaoService = {
      autenticado : false
    };
    autenticacaoService.login = function(usuario){
      var config = {
        usuario :usuario,
        msg:null
      },deffend =  $q.defer();

      var success = function(config){
         var usuarioResposta =  config.data;
        if(usuario.senha === usuarioResposta.senha){

          autenticacaoService.autenticado = true;
          Session.create( config );
          config.usuario = usuarioResposta;

          deffend.resolve(config);
        }else{
          config.msg = 'Senha incorreta!';
          deffend.reject(config);
        }
      };
      var error = function(config){
          config.msg = 'Usuario não cadastrado';
          deffend.reject(config);
      };
      doc.getUsuario(config.usuario)
        .then(success,error);
      return deffend.promise;
    };

    autenticacaoService.estaAutenticado = function(){
        return !!Session.user;
    };
      return autenticacaoService;

  });
