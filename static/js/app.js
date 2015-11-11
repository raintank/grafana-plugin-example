require([
  'angular',
  'app/app',
  'lodash'
],
function (angular, app, _) {
  "use strict";
  console.log("initializing grafana-plugin-example app.");
  var ex = angular.module('example', []);
  app.useModule(ex);

  // register new routes within the AngularJS app. 
  ex.config(function($routeProvider) {
    console.log("adding plugin routes");
    $routeProvider
      .when("/example/servers", {
        templateUrl: 'plugins/example/static/partials/servers.html',
        controller : 'listServersCtrl'
      })
      .when("/example/servers/new", {
        templateUrl: 'plugins/example/static/partials/add_server.html',
        controller : 'addServersCtrl'
      });
  });

  _.forEach(['controllers', 'directives'], function(moduleName){
    var module = angular.module('example.'+moduleName, []);
    app.useModule(module);
  })
  
  // the app base url is public/.  When loading dependencies from 
  // external plugin urls the path needs to be relative to the site root,
  // which is 1 directory above the app url.
  require([
    '../plugins/example/static/js/controllers/all',
//    '../plugins/example/static/directives/all',
  ], function() {
    console.log("loaded example plugin components.");
  });

});

