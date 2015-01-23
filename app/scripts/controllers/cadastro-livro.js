'use strict';

/**
 * @ngdoc function
 * @name bibliotecasSystemApp.controller:CadastroLivroCtrl
 * @description
 * # CadastroLivroCtrl
 * Controller of the bibliotecasSystemApp
 */
angular.module('bibliotecasSystemApp')
  .controller('CadastroLivroCtrl', function ($scope,modal,doc,genero) {

    $scope.obra = {
        tipo : true
    };
    $scope.msg = [];

    $scope.autores = [{
    	id:1,nome:'bruno'
    }];

    $scope.editoras = [
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

    $scope.$on('atualizarListaGeneroNoCadastroLivro',function(){
      obterListaGenero();
    });

    var obterListaGenero = function(){
      var config = {
        genero : null,
        msg : null
      };

      var sucesso = function(config){
        $scope.generos = config.generos;
      };

      var erro = function(erro){
        $scope.msg = [];
        $scope.msg.push('Erro ao Carredar a lista de genero por favor entra em contato com suporte de sistema');
        console.log(erro);
      };

      genero.obterDocTipoGenero(config).then(sucesso,erro);
    };
    obterListaGenero();
  });
