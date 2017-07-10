
(function () {
  'use strict';

  angular
    .module('app.directive')
    .directive('dashboardDir', dashboardDir);


  /** @ngInject */
  function dashboardDir() {


    var directive = {
      restrict: 'EA',
      scope: {
        item: '='
      },
      templateUrl: 'js/component/directive/dashboardtemplate.html'


    };
    return directive;
  }



}());
