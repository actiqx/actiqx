(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('dashboardCtrl', dashboardCtrl)

  dashboardCtrl.$inject = ['$q','logger','dashboardService'];
  function dashboardCtrl($q,logger,dashboardService) {

    var vm = this;
    vm.tileInfoList = [];
    activate();
    function activate() {
      var promises = [getDashboard()];
      return $q.all(promises).then(function () {
        logger.info('Activated Dashboard View');
      });
    }

   /*function navViewCtrl() {
     commonService.pageGo('/dashboard');
   }*/
    function getDashboard() {
     return dashboardService.getdashboarddata().then(function (data) {
        vm.tileInfoList = angular.fromJson(data);
        return vm.tileInfoList;
      })
    };

  }

}());

