'use strict';

/**
 * @ngdoc function
 * @name bibliotecasSystemApp.controller:CadastroGeneroCtrl
 * @description
 * # CadastroGeneroCtrl
 * Controller of the bibliotecasSystemApp
 */
angular.module('bibliotecasSystemApp')
  .controller('CadastroGeneroCtrl', function ($scope,$modalInstance) {
    $scope.close = function(){
    	$modalInstance.close();
    }
  });
