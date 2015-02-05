/*jshint camelcase: false */
'use strict';

/**
 * @ngdoc service
 * @name bibliotecasSystemApp.Session
 * @description
 * # Session
 * Service in the bibliotecasSystemApp.
 */
angular.module('bibliotecasSystemApp')
  .service('Session', function ($rootScope, AUTH_EVENTS,$cookieStore) {
    var storedSession = $cookieStore.get('userSession');
    var that = this;

    if(storedSession){
      this.access_token = storedSession.data._rev;
      this.user = storedSession.data;
    }

    this.create = function(sessionData){
      this.access_token = sessionData.data._rev;
      this.user = sessionData.data;
      $cookieStore.put('userSession',sessionData);
    };

    this.destroy = function(){
      that.access_token = null;
      that.user = null;
      $cookieStore.remove('userSession');
    };

    $rootScope.$on(AUTH_EVENTS.notAuthorized,this.destroy);
    $rootScope.$on(AUTH_EVENTS.sessionTimeOut,this.destroy);

    return this;

  });
