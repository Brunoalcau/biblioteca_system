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

    $scope.livro= {
        tipoDocumento : 'LIVRO'
    };

    $scope.salvarLivro = function(){
        var sucess = function(){
          var alert = {
            type:'success',
            msg : 'Cadastro com sucesso'
          };
          $scope.addAlert(alert);
          $scope.livro = null;
          },error = function(error){
            var alert = {
              type:'danger',
              msg : error
            };
            $scope.addAlert(alert);
        };

        doc.salvar($scope.livro)
          .then(sucess,error);
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

    $scope.openDialogColecao = function(){
      modal.dialogColecao();
    };

    $scope.close = function(){
        modal.close();
    };

    $scope.openDialogArtigo = function(){
        modal.dialogArtigo();
    };

    $scope.$on('atualizarListaGeneroNoCadastroLivro',function(){
      var config = null,
        success = function(config){
          $scope.colecoes = config.colecoes;
        },error = function(err){
          console.log(err);
        };
      obterDocumentosPorTipo.colecoes(config).then(success,error);
    });

    $scope.$on('atualizarListaColecao',function(){
//      obterListaParaComboBox();
        var config = {},
          success = function(config){
            $scope.colecoes = config.colecoes;
          },error = function(err){
            console.log(err);
          };
      obterDocumentosPorTipo.colecoes(config).then(success,error);

    });


    $scope.$on('atualizarListaAutor',function(){

      var config = {
              autor : null,
              msg : null
            },
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
        $scope.colecoes= config.colecoes;
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
        .then(obterDocumentosPorTipo.colecoes,erro)
        .then(sucesso,erro);
    };
    obterListaParaComboBox();
  });
