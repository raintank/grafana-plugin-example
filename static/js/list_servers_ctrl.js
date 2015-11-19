define([
  'angular',
  './module',
],
function (angular, module) {

  module.controller('ListServersCtrl', function($scope, backendSrv) {
    backendSrv.get('api/plugin-proxy/external-example/api/servers').then(function(res) {
        $scope.servers = res.servers;
    });
  });

});
