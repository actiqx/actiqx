(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('loginCtrl', loginCtrl)

    loginCtrl.$inject = ['$state','$sanitize'];

    function loginCtrl($state,$sanitize) {
        /* jshint validthis:true */
        var vm = this;
        vm.username = "";
        vm.password = "";

        vm.getLoginData = function () {
            localStorage.setItem('username',$sanitize( vm.username));
            if(vm.username)
            {
                $state.go('app.chat');
            }
        }
    }
})();