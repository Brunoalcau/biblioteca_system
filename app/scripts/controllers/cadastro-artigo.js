'use strict';

/**
 * @ngdoc function
 * @name bibliotecasSystemApp.controller:CadastroArtigoCtrl
 * @description
 * # CadastroArtigoCtrl
 * Controller of the bibliotecasSystemApp
 */
angular.module('bibliotecasSystemApp')
  .controller('CadastroArtigoCtrl', function ($scope,modal) {
    $scope.dialogGenero = function(){
    	modal.dialogGenero();
    };
  });
