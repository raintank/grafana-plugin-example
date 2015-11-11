define([
  'angular',
],
function (angular) {
  var module = angular.module('example.controllers');

  module.controller('exampleCtrl', function($scope, backendSrv) {
    backendSrv.get('plugins/example/api/servers').then(function(res) {
        $scope.servers = res.servers;
    });
  });
});
