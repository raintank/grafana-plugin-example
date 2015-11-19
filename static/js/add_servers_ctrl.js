define([
  'angular',
  './module',
],
function (angular, module) {

  module.controller('AddServersCtrl', function($scope, backendSrv, $location) {
    $scope.server = { "hostnme": "", "ip": ""};
    $scope.save = function() {
      backendSrv.post('/api/plugin-proxy/external-example/api/servers', $scope.server).then(function(res) {
        $location.path("example/servers");
      });
    };
  });

});
