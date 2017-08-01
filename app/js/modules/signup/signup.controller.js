(function() {
    'use strict';

    angular
        .module('app.signup')
        .controller('signupCtrl', signupCtrl);

   signupCtrl.$inject = ['$q', 'logger','$window', '$http', '$state', 'ActiqxApiFactory', 'ACTIQX_SERVICE_URI'];
 function signupCtrl($q, logger, $window, $http, $state, ActiqxApiFactory, ACTIQX_SERVICE_URI) {
        var vm = this;
        vm.newuser = {
            "name": "",
            "email": "",
            "mobile": "",
            "password": "",
            "role": "user",
            "image": "",
            "timeSlots":{
                "start": "",
                "end": "",
                "status": ""
            }
        };
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
            
        vm.SignInCall=function(){
          var requestData={
            "name": vm.newuser.name,
            "email": vm.newuser.email,
            "mobile": vm.newuser.mobile,
            "password": vm.newuser.password,
            "role": "user",
            "avatar": vm.newuser.image,
            "timeSlots": [
                {
                    "start": vm.newuser.timeSlots.start,
                    "end": vm.newuser.timeSlots.end,
                    "status": vm.newuser.timeSlots.status
                }
            ],
            "location": {
               "latitude": vm.locAddress.components.location.lat,
                "longitude": vm.locAddress.components.location.long
            }
        };
          
      ActiqxApiFactory.doSignIn(ACTIQX_SERVICE_URI.SignInURL, requestData).then(function (data) {
       //$http.post("http://test1234.us-east-1.elasticbeanstalk.com/auth/local", requestData, requestHeader)
              if(data){
                $window.localStorage.setItem("token", data.token);
                $state.go("app.login");
              }
            }, function (err) {
              
            });
        }
    }
})();
