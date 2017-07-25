(function(){
    'use strict';

    angular
        .module('app.factory')
        .factory('chatFactory', chatFactory)

    chatFactory.$inject = ['socketFactory'];

    function chatFactory(socketFactory) {
        var myIoSocket = io.connect('http://chat.socket.io');
      var  mySocket = socketFactory({
    	ioSocket: myIoSocket
  	});
  	
	return mySocket;
    }
})();