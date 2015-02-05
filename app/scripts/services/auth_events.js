'use strict';

/**
 * @ngdoc service
 * @name bibliotecasSystemApp.AUTHEVENTS
 * @description
 * # AUTHEVENTS
 * Constant in the bibliotecasSystemApp.
 */
angular.module('bibliotecasSystemApp')
  .constant('AUTH_EVENTS', {
    loginSuccess:'auth-login-success',
    loginfalied : 'auth-login-falied',
    logoutSuccess : 'auth-logout-success',
    sessionTimeOut : 'auth-session-timeout',
    notAuthenticated : 'auth-not-authenticates',
    notAuthorized:'auth-not-authorized'
  });
