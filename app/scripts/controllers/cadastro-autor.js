'use strict';

/**
 * @ngdoc function
 * @name bibliotecasSystemApp.controller:CadastroAutorCtrl
 * @description
 * # CadastroAutorCtrl
 * Controller of the bibliotecasSystemApp
 */
angular.module('bibliotecasSystemApp')
  .controller('CadastroAutorCtrl', function ($scope,$modalInstance,$rootScope,doc) {
	    $scope.close = function(){
	    	$modalInstance.close();
	    };
      $scope.autor = {
         tipoDocumento : 'AUTOR'
      };

      var atualizarListaAutorNoCadastroLivro = function(){
        $rootScope.$broadcast('atualizarListaAutor');
      };
      $scope.salvarAutor  = function(){
        var sucess = function(){
          atualizarListaAutorNoCadastroLivro();
          $scope.close();
        };
        var erro = function(){

        };
        doc.salvar($scope.autor).then(sucess,erro);
      };
  	});
