'use strict';

/**
 * @ngdoc function
 * @name bibliotecasSystemApp.controller:CadastroEditoraCtrl
 * @description
 * # CadastroEditoraCtrl
 * Controller of the bibliotecasSystemApp
 */
angular.module('bibliotecasSystemApp')
  .controller('CadastroEditoraCtrl', function ($scope,$modalInstance,doc,$rootScope) {

    $scope.editora = {
      tipoDocumento : 'EDITORA'
    };

    var atualizarListaEditoraNoCadastroLivro = function(){
        $rootScope.$broadcast('atualizarListaEditora');
    };

    $scope.salvarEditora = function(){

      var erro = function(){

      };

      var sucess = function(){
        $scope.close();
        $scope.editora = null;
      };

      doc.salvar($scope.editora)
      .then(sucess, erro)
      .then(atualizarListaEditoraNoCadastroLivro);
    };

    $scope.close = function(){
      $modalInstance.close();
    };
  });
