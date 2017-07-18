(function () {
  'use strict';

  angular
    .module('app.posttask')
    .controller('posttaskCtrl', posttaskCtrl)

  posttaskCtrl.$inject = ['taskService', 'dataFactory'];
  function posttaskCtrl(taskService, dataFactory) {
    var vm = this;
    vm.postTaskInfo = {};
    vm.postTaskInfo.title = "";
    vm.postTaskInfo.info = "";
    vm.postTaskInfo.place = "";
    vm.postTaskInfo.location = {};
    vm.postTaskInfo.location.lat = "";
    vm.postTaskInfo.location.lng = "";
    vm.postTaskInfo.selectedDate = new Date();
    // list of `state` value/display objects
    vm.categories = loadAllCategory();
    vm.selectedTaskCategory = null;
    vm.searchText = null;
    vm.querySearch = querySearch;

    /*
   * Search for states... use $timeout to simulate
   * remote dataservice call.
   */
    init();

    function init() {
    }

    vm.getSearchMatches = function (text) {
      text = text.toLowerCase();
      var ret = vm.categories.filter(function (d) {
        return d.value.startsWith(text);
      });
      return ret;
    }
    function querySearch(query) {
      var results = query ? vm.categories.filter(createFilterFor(query)) : vm.categories;
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
      return deferred.promise;
    }
    function loadAllCategory() {
      var selectedCatego = dataFactory.getsomething();
      if (!selectedCatego) {
        var allCategories = ["Car Service", "Home Repair", "Furniture Services", "Pick and Delivery Service", "MCar Service", "YHome Repair", "NFurniture Services", "SPick and Delivery Service", "XCar Service", "THome Repair", "YFurniture Services", "UPick and Delivery Service"];
        return allCategories.map(function (catg) {
          return {
            value: catg.toLowerCase(),
            display: catg
          };
        });
      }
      else {
        vm.selectedCategory = selectedCatego.title;
        return vm.selectedCategory;
      }
    }

    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(cate) {
        return (cate.value.indexOf(lowercaseQuery) === 0);
      };
    }

    vm.locAddress = {
      name: '',
      place: '',
      components: {
        location: {
          lat: '',
          long: ''
        }
      }
    };
    vm.doPostTask = function () {

      vm.postTaskInfo.place = vm.locAddress.name;
      vm.postTaskInfo.location.lat = vm.locAddress.components.location.lat;
      vm.postTaskInfo.location.lng = vm.locAddress.components.location.long;

      var requestData = vm.postTaskInfo;
      var requestHeader = {
        headers: { 'Content-Type': 'application/json' }
      };

      posttaskdata(requestData, requestHeader);
    };

    function posttaskdata(requestData, requestHeader) {
      return taskService.posttaskdata(requestData, requestHeader);
      };

  }

}());
