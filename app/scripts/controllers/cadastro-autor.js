'use strict';

/**
 * @ngdoc function
 * @name bibliotecasSystemApp.controller:CadastroAutorCtrl
 * @description
 * # CadastroAutorCtrl
 * Controller of the bibliotecasSystemApp
 */
angular.module('bibliotecasSystemApp')
  .controller('CadastroAutorCtrl', function ($scope,$modalInstance) {
	    $scope.close = function(){
	    	$modalInstance.close();
	    };
  	});
