'use strict';

/**
 * @ngdoc function
 * @name bibliotecasSystemApp.controller:TopoCtrl
 * @description
 * # TopoCtrl
 * Controller of the bibliotecasSystemApp
 */
angular.module('bibliotecasSystemApp')
  .controller('TopoCtrl', function ($scope,$rootScope,Session,$location,AUTH_EVENTS) {

    $scope.logout = function(){
        $location.path('/login');
         Session.destroy();
         $scope.isAuth = false;
    };

    $scope.$on(AUTH_EVENTS.loginSuccess,function(){
      carregaSession();
    });

    var carregaSession = function(){
      $scope.isAuth = !!Session.user;
      $scope.user = Session.user;
    };

    $scope.$on(AUTH_EVENTS.logoutSuccess,function(){
        $scope.user = null;
        $scope.isAuth = false;
    });
    carregaSession();
  });
