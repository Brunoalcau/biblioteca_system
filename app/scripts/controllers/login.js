'use strict';

/**
 * @ngdoc function
 * @name bibliotecasSystemApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bibliotecasSystemApp
 */
angular.module('bibliotecasSystemApp')
  .controller('LoginCtrl', function ($scope,$rootScope, autenticacao,AUTH_EVENTS,$location) {
    $scope.credencial = {
      usuario : '',
      senha : ''
    };

    $scope.autenticar = false;

    $scope.login = function(){

      var success = function(){
         $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
         $location.path('/');
      };

      var error = function(config){
       var alert = {
            type:'danger',
            msg : config.msg
        };
        $scope.addAlert(alert);
        $rootScope.$broadcast(AUTH_EVENTS.loginfalied);
      };

    autenticacao.login($scope.usuario)
      .then(success,error);
    };

    $scope.addAlert = function(alert) {
        $scope.alerts = [];
        $scope.alerts.push(alert);
    };
  });
