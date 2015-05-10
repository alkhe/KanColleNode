require.config(
{ paths: { 'jquery': 'vendor/jquery'
         , 'underscore': 'vendor/underscore'
         , 'bootstrap': 'vendor/bootstrap'
         , 'jquery.ui': 'vendor/jquery-ui'
         , 'backbone': 'vendor/backbone'
         , 'text': 'vendor/text'
         , 'socket.io': '../socket.io/socket.io'
         , 'bootstrap-contextmenu': 'vendor/bootstrap-contextmenu'
         , 'bootstrap-select': 'vendor/bootstrap-select'
         , 'bootstrap-formhelpers': 'vendor/bootstrap-formhelpers'
         , 'data-tables': 'vendor/jquery.dataTables'
         , 'bootstrap-touchspin': 'vendor/jquery.bootstrap-touchspin'
         }
, shim: { 'socket.io': { exports: 'io' }
        , 'bootstrap': ['jquery']
        , 'jquery.ui': ['jquery']
        , 'bootstrap-select': ['jquery', 'bootstrap']
        , 'bootstrap-formhelpers': ['jquery']
        , 'data-tables': ['jquery']
        }
})

require(['app'], function (app) {
  app.initialize()
})