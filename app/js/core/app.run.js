// (function(){
//     'use strict';

//     angular
//         .module('app')
//         .run(runApp)


//     runApp.$inject = ['$ionicPlatform','$cordovaPush','$rootScope'];

//     function runApp($ionicPlatform,$cordovaPush, $rootScope){
//        var androidConfig = {
//     "senderID": "replace_with_sender_id",
//   };
//         $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if (window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//       cordova.plugins.Keyboard.disableScroll(true);

//     }
//     if (window.StatusBar) {
//       // org.apache.cordova.statusbar required
//       StatusBar.styleDefault();
//     }
//      $cordovaPush.register(androidConfig).then(function(result) {
//       // Success
//     }, function(err) {
//       // Error
//     })


//   });
//     }

//  $rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
//       switch(notification.event) {
//         case 'registered':
//           if (notification.regid.length > 0 ) {
//             alert('registration ID = ' + notification.regid);
//           }
//           break;

//         case 'message':
//           // this is the actual push notification. its format depends on the data model from the push server
//           alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
//           break;

//         case 'error':
//           alert('GCM error = ' + notification.msg);
//           break;

//         default:
//           alert('An unknown GCM event has occurred');
//           break;
//       }
//     });


//     // WARNING: dangerous to unregister (results in loss of tokenID)
//     $cordovaPush.unregister(options).then(function(result) {
//       // Success!
//     }, function(err) {
//       // Error
//     })



// }());


