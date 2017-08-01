(function () {
<<<<<<< HEAD
  'use strict';

  angular
    .module('app.login')
    .controller('loginCtrl', loginCtrl)

  loginCtrl.$inject = ['$q', 'logger','$window', '$http', '$state', 'ActiqxApiFactory', 'ACTIQX_SERVICE_URI'];
 function loginCtrl($q, logger, $window, $http, $state, ActiqxApiFactory, ACTIQX_SERVICE_URI) {
        var vm = this;
        vm.Name="hello";
        vm.user = {
          uname: '',
          password: '',

        };
        vm.LoginCall=function(){
          var requestData={
          "username": vm.user.uname,
          "password": vm.user.password,
        };
          
      ActiqxApiFactory.doLogin(ACTIQX_SERVICE_URI.LoginURL, requestData).then(function (data) {
       //$http.post("http://test1234.us-east-1.elasticbeanstalk.com/auth/local", requestData, requestHeader)
              if(data){
                $window.localStorage.setItem("token", data.token);
                $state.go("app.dashboard");
              }
            }, function (err) {
              
            });
        }
    }
  
  }());
=======
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
>>>>>>> b61255622453763df15de627847897ecfca437fe
