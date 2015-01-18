'use strict';

/**
 * @ngdoc service
 * @name bibliotecasSystemApp.modal
 * @description
 * # modal
 * Service in the bibliotecasSystemApp.
 */
angular.module('bibliotecasSystemApp')
  .service('modal', function ($modal) {
  	return {
  		dialogAutor : function(){
  			$modal.open({
  				templateUrl : 'views/cadastro-autor.html',
  				controller: 'CadastroAutorCtrl',
  				backdrop: 'static'
  			});
  		},
  		dialogGenero : function(){
  			$modal.open({
  				templateUrl : 'views/cadastro-genero.html',
  				controller : 'CadastroGeneroCtrl',
  				backdrop : 'static'
  			});
  		},
      dialogArtigo : function(){
        $modal.open({
          templateUrl : 'views/cadastro-artigo.html',
          controller : 'CadastroArtigoCtrl',
          backdrop : 'static'
        });
      },
      dialogEditora : function(){
        $modal.open({
          templateUrl : 'views/cadastro-editora.html',
          controller : 'CadastroEditoraCtrl',
          backdrop : 'static'
        });
      },
  		close : function(){
			$modal.close();
  		}
  	};
  });
