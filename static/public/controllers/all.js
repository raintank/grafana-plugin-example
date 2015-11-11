define([
  'angular',
],
function (angular) {
  var module = angular.module('raintank.controllers');

  module.controller('testCtrl', function($scope, backendSrv) {
  	backendSrv.get('thirdparty/raintank/api/test').then(function(res) {
    	$scope.test = res;
    });
  });
});