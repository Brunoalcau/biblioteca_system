'use strict';

/**
 * @ngdoc function
 * @name bibliotecasSystemApp.controller:CadastroLivroCtrl
 * @description
 * # CadastroLivroCtrl
 * Controller of the bibliotecasSystemApp
 */
angular.module('bibliotecasSystemApp')
  .controller('CadastroLivroCtrl', function ($scope,modal,doc,obterDocumentosPorTipo) {

    $scope.obra = {
        tipo : true
    };

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
      obterListaParaComboBox();
    });

    $scope.$on('atualizarListaAutor',function(){

      var config = null,
          sucess = function(config){
            $scope.autores = config.autores;
          },
          error = function(erro){
            console.log(erro);
          };

      obterDocumentosPorTipo.autores(config).then(sucess, error);
    });

    $scope.$on('erroGenerico',function(){
      var alert = {
        type:'danger',
        msg : 'Erro fazer essa ação por favor entrar em contato do suporte do sistema...'
      };
      $scope.addAlert(alert);
    });

    $scope.addAlert = function(alert) {
      $scope.alerts = [];
      $scope.alerts.push(alert);
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    var obterListaParaComboBox = function(){
      var config = {
        genero : null,
        msg : null
      };

      var sucesso = function(config){
        $scope.generos = config.generos;
        $scope.autores = config.autores;
        $scope.editoras = config.editoras;
      };

      var erro = function(erro){
        var alert = {
          type: 'danger',
          msg : 'Erro ao carredar a lista de gênero por favor entra em contato com suporte de sistema'
        };

        $scope.alerts(alert);
        console.log(erro);
      };

      obterDocumentosPorTipo.generos(config)
        .then(obterDocumentosPorTipo.autores,erro)
        .then(obterDocumentosPorTipo.editoras,erro)
        .then(sucesso,erro);
    };
    obterListaParaComboBox();
  });
