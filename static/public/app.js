require([
  'angular',
  'app/app',
  'lodash'
],
function (angular, app, _) {
  "use strict";
  console.log("initializing raintank app.");
  var rt = angular.module('raintank', []);
  app.useModule(rt);

  rt.config(function($routeProvider) {
    console.log("adding raintank routes");
    $routeProvider
      .when("/raintank/test", {
        templateUrl: 'thirdparty/raintank/public/partials/test.html',
        controller : 'testCtrl'
      }
    );
  });

  _.forEach(['controllers', 'directives'], function(moduleName){
    var module = angular.module('raintank.'+moduleName, []);
    app.useModule(module);
  })
  
  // the app base url is public/.  When loading dependencies from 
  // thirdparty urls the path needs to be relative to the site root,
  // which is 1 directory above the app url.
  require([
    '../thirdparty/raintank/public/controllers/all',
  ], function() {
    console.log("loaded raintank components.");
  });

});
