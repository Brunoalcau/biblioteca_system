'use strict';

var
  couchapp = require('couchapp'),
  path = require('path'),
  ddoc = {
    _id: '_design/app',
    views: {},
    lists: {},
    shows: {}
  };


ddoc.views.documentoPorTipo = {
  map:function(doc) {
    if(doc.tipoDocumento){
      emit(doc.tipoDocumento, doc);
    }
  },
  reduce : '_count'
};

ddoc.views.documentoAutenticacao = {
  map:function(doc){
     if(doc.tipoDocumento && doc.tipoDocumento === 'user'){
       emit([doc.usuario,doc.senha],doc);
     }
  },
  reduce : '_count'
};


module.exports = ddoc;


couchapp.loadAttachments(ddoc, path.join(__dirname, 'app'));
// couchapp.loadAttachments(ddoc, path.join(__dirname, 'bower_components'));
