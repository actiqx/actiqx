(function(){
    'use strict';

    angular
        .module('app.factory')
        .factory('chatFactory', chatFactory)

    chatFactory.$inject = ['socketFactory'];

    function chatFactory($socketFactory1) {
        var myIoSocket = io.connect('http://chat.socket.io');
        mySocket = socketFactory({
    	ioSocket: myIoSocket
  	});
  	
	return mySocket;
    }
})();