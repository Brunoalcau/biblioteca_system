'use strict';

/**
 * @ngdoc function
 * @name bibliotecasSystemApp.controller:CadastroLivroCtrl
 * @description
 * # CadastroLivroCtrl
 * Controller of the bibliotecasSystemApp
 */
angular.module('bibliotecasSystemApp')
  .controller('CadastroLivroCtrl', function ($scope,modal) {
    
    $scope.livro = {
        tipo : true
    };

    $scope.autores = [{
    	id:1,nome:'bruno'
    }];

    $scope.generos = [{
    	id:1,nome:' Romance'
    }];

    $scope.openDialogAutor = function(){
    	modal.dialogAutor();
    };
    
    $scope.openDialogGenero = function(){
        modal.dialogGenero();
    };
    $scope.close = function(){
        modal.close();
    }
    $scope.openDialogArtigo = function(){
        modal.dialogArtigo();
    }

  });
