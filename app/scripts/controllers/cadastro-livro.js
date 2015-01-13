'use strict';

/**
 * @ngdoc function
 * @name bibliotecasSystemApp.controller:CadastroLivroCtrl
 * @description
 * # CadastroLivroCtrl
 * Controller of the bibliotecasSystemApp
 */
angular.module('bibliotecasSystemApp')
  .controller('CadastroLivroCtrl', function ($scope) {
    $scope.autores = [{
    	id:1,nome:'bruno'
    }];

    $scope.generos = [{
    	id:1,nome:' Romance'
    }];

  });
