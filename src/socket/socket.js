const io = require('socket.io-client');

class socket {

    state = {
        socket: io()
    };

    constructor( serverAddress, serverPort = 13371 ) {
        this.state.socket = io("http://"+serverAddress+":"+serverPort);
    }

}


export default socket;