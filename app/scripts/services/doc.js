'use strict';

/**
 * @ngdoc service
 * @name bibliotecasSystemApp.doc
 * @description
 * # doc
 * Service in the bibliotecasSystemApp.
 */
angular.module('bibliotecasSystemApp')
  .service('doc', function ($http) {
  	return {
  		salvar : function(doc){
  			$http.post('biblioteca',doc);
  		}
  	};
  });
