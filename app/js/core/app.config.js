(function () {
    'use strict';

    angular
        .module('app')
        .config(configApp)

    configApp.$inject = ['$stateProvider', '$urlRouterProvider','$ionicConfigProvider'];

    function configApp($stateProvider,$urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'js/modules/layout/layout-temp.html',
                controller: 'layoutCtrl as vm'

            })
            .state('app.dashboard', {
                url: '/dashboard',
                views: {
                    'content': {
                        templateUrl: 'js/modules/dashboard/dashboard.html',
                        controller: 'dashboardCtrl as vm'
                    }
                }
            })
            .state('app.dashboard1', {
                url: '/dashboard1',
                views: {
                    'menuContent': {
                        templateUrl: 'js/modules/dashboard/dashboard.html',
                        controller: 'dashboardCtrl as vm'
                    }
                }
            });




        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/dashboard');
        $ionicConfigProvider.tabs.position("bottom");
    }

}());
