define([
  'angular',
  'app/app',
  './module',
  './add_servers_ctrl',
  './list_servers_ctrl',
],
function (angular, app, module) {
  "use strict";

  app.useModule(module);

  // register new routes within the AngularJS app.
  module.config(function($routeProvider) {
    console.log("adding plugin routes");
    $routeProvider
      .when("/example/servers", {
        templateUrl: 'public/plugins/external-example/partials/servers.html',
        controller : 'ListServersCtrl'
      })
      .when("/example/servers/new", {
        templateUrl: 'public/plugins/external-example/partials/add_server.html',
        controller : 'AddServersCtrl'
      });
  });

});

