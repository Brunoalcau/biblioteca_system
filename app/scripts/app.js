'use strict';

/**
 * @ngdoc overview
 * @name bibliotecasSystemApp
 * @description
 * # bibliotecasSystemApp
 *
 * Main module of the application.
 */
angular
  .module('bibliotecasSystemApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'formstamp',
    'ui.bootstrap'
    // 'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })  
      .when('/cadastro-livro', {
        templateUrl: 'views/cadastro-livro.html',
        controller: 'CadastroLivroCtrl'
      })
      .when('/cadastro-autor', {
        templateUrl: 'views/cadastro-autor.html',
        controller: 'CadastroAutorCtrl'
      })
      .when('/cadastro-genero', {
        templateUrl: 'views/cadastro-genero.html',
        controller: 'CadastroGeneroCtrl'
      })
      .when('/cadastro-artigo', {
        templateUrl: 'views/cadastro-artigo.html',
        controller: 'CadastroArtigoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
