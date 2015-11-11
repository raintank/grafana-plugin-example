define([
  'angular',
],
function (angular) {
  var module = angular.module('example.controllers');

  module.controller('listServersCtrl', function($scope, backendSrv) {
    backendSrv.get('plugins/example/api/servers').then(function(res) {
        $scope.servers = res.servers;
    });
  });
  module.controller('addServersCtrl', function($scope, backendSrv, $location) {
  	$scope.server = { "hostnme": "", "ip": ""};
  	$scope.save = function() {
	    backendSrv.post('plugins/example/api/servers', $scope.server).then(function(res) {
	        $location.path("example/servers");
	    });
	}
  });
});
