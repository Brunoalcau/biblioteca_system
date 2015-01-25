'use strict';

/**
 * @ngdoc function
 * @name bibliotecasSystemApp.controller:CadastroEditoraCtrl
 * @description
 * # CadastroEditoraCtrl
 * Controller of the bibliotecasSystemApp
 */
angular.module('bibliotecasSystemApp')
  .controller('CadastroEditoraCtrl', function ($scope,$modalInstance,doc) {

    $scope.editora = {
      tipoDocumento : 'EDITORA'
    };

    $scope.salvarEditora = function(){

      var erro = function(){

      };

      var sucess = function(){
        $scope.close();
        $scope.editora = null;
      };

      doc.salvar($scope.editora).then(sucess, erro);
    };

    $scope.close = function(){
      $modalInstance.close();
    };
  });
