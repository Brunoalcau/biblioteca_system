'use strict';

/**
 * @ngdoc function
 * @name bibliotecasSystemApp.controller:CadastroGeneroCtrl
 * @description
 * # CadastroGeneroCtrl
 * Controller of the bibliotecasSystemApp
 */
angular.module('bibliotecasSystemApp')
  .controller('CadastroGeneroCtrl', function ($scope,$modalInstance,doc,$rootScope) {
  	$scope.genero = {
  		tipoDocumento : 'GENERO'
  	};

    $scope.close = function(){
    	$modalInstance.close();
    };

    var atualizarListaGeneroNoCadastroLivro = function(){
      $rootScope.$broadcast('atualizarListaGeneroNoCadastroLivro');
    };

    $scope.salvarGenero = function(){

      var success = function(){
        atualizarListaGeneroNoCadastroLivro();
        $scope.close();

      };
      var error = function (erro){

        console.log(erro);
      };

      doc.salvar($scope.genero).then(success).catch(error);
    };
  });

