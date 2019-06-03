import io from 'socket.io-client';
import CryptoManager from '../crypto/cryptoManager';

class Socket {

    constructor(contextInfo) {

        this.setTitleInfo = contextInfo.callbacks.setTitleInfo;
        this.addChatEntry = contextInfo.callbacks.addChatEntry;

        this.socket = io();
        
        this.crypto = new CryptoManager();
        
        console.log(this.crypto.keyPair);
        

        // FUNCTION BINDING
        this.connect = this.connect.bind(this);
        this.sendMessage = this.sendMessage.bind(this);

    }

    sendMessage(msg) {
        msg = this.crypto.encrypt(msg);
        //console.log(msg);
        this.socket.emit('MESSAGE_SEND', msg);
    }

    connect(serverAddress) {
        this.username = localStorage.getItem('username');
        //console.log(this.username);
        this.socket.disconnect();
        this.socket = io('http://'+serverAddress+':13371');
        this.setTitleInfo("Connecting to "+(this.socket.io.uri).split('/')[2].split(':')[0]);

        this.socket.on('connect', () => {
            console.log("Connected to Server");
            this.setTitleInfo("Connected to "+(this.socket.io.uri).split('/')[2].split(':')[0]);
            
        });

        this.socket.on('INFO', (data) => {

            console.log(data);
            this.setTitleInfo("Requesting for Registering");
            this.crypto.setServerPublicKey( data.pubKey );
            //console.log("Requesting for Registering");
            this.socket.emit('REGISTER', {username: this.username, pubKey: this.crypto.clientKeyPair.publicKey});
             
        });

        this.socket.on('MESSAGE_RECEIVED', (data) => {
            var msg = this.crypto.decrypt(data.msg);
            //console.log('BOOP');
            //console.log(msg);
            this.addChatEntry({username: data.username, msg: msg});
        });

        this.socket.on('REGISTER', (data) => {
            var id = data.id;
            console.log(`${this.username} Registered with ${id}`);
            console.log("Registering Successful");
            this.setTitleInfo("Registering Successful");
        });
        
        //this.state.socket.emit('REGISTER', {username: this.username});
    }




}


export default Socket;