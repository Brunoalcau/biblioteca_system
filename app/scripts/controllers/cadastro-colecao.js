'use strict';

/**
 * @ngdoc function
 * @name bibliotecasSystemApp.controller:CadastroColecaoCtrl
 * @description
 * # CadastroColecaoCtrl
 * Controller of the bibliotecasSystemApp
 */
angular.module('bibliotecasSystemApp')
  .controller('CadastroColecaoCtrl', function ($scope,$modalInstance,doc) {

    $scope.salvarColecao = function(){
      var sucess  = function(){
        $scope.close();
      }, error = function(){

      };
      doc.salvar($scope.colecao).then(sucess,error);
    };

    $scope.close = function(){
      $modalInstance.close();
    };
  });
