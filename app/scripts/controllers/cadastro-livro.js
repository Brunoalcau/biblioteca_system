'use strict';

/**
 * @ngdoc function
 * @name bibliotecasSystemApp.controller:CadastroLivroCtrl
 * @description
 * # CadastroLivroCtrl
 * Controller of the bibliotecasSystemApp
 */
angular.module('bibliotecasSystemApp')
  .controller('CadastroLivroCtrl', function ($scope,modal,doc) {

    $scope.obra = {
        tipo : true
    };

    $scope.autores = [{
    	id:1,nome:'bruno'
    }];

    $scope.generos = [
        {
            id:1,nome:'Romance'
        },
        {
        	id:2,nome:'Aventura'
        }
    ];

    $scope.salvar = function(){
        doc.salvar($scope.obra);
    };

    $scope.openDialogEditora = function(){
        modal.dialogEditora();
    };

    $scope.openDialogAutor = function(){
    	modal.dialogAutor();
    };
    
    $scope.openDialogGenero = function(){
        modal.dialogGenero();
    };
    $scope.close = function(){
        modal.close();
    };

    $scope.openDialogArtigo = function(){
        modal.dialogArtigo();
    };  

  });
