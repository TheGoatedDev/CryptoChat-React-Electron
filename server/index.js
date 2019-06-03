const server = require('http').createServer();
const io = require('socket.io')(server);
const uuid = require('uuid/v4');

const nacl = require('tweetnacl');
const nacl_util  = require('tweetnacl-util');

var serverKeyPair = nacl.box.keyPair();

function Uint8ArrayConvert(serverKey) {
    var result = [];
        for(var i in serverKey)
        {
            //console.log(serverKey[i])
            result.push(serverKey[i]);
        }

        result = new Uint8Array(result);
        return result;
}

function encrypt(message, socketKey) {

    var nonce = nacl.randomBytes(24);

    console.log(socketKey);

    const box = nacl.box(
        nacl_util.decodeUTF8(message),
        nonce,
        Uint8ArrayConvert(socketKey),
        serverKeyPair.secretKey
    )

    console.log("Encrypted: " + box);
    
    const pack = {box: box, nonce: nonce};

    //this.decrypt(pack);
        
    return pack;

}

function decrypt(encrypted, socketKey) {
    //console.log(encrypted);
    const newBox = Uint8ArrayConvert(encrypted.box);
    const newNonce = Uint8ArrayConvert(encrypted.nonce);

    //console.log(socketKey);

    const payload = nacl.box.open(newBox, newNonce, Uint8ArrayConvert(socketKey), serverKeyPair.secretKey)
    const decrypted =  nacl_util.encodeUTF8(payload);
    //console.log(decrypted);
    return decrypted;
}

var socketList = [];



var serverINFO = {
    name: "Royal Palace",
    desc: "Bitch Boi Resting Place",
    pubKey: serverKeyPair.publicKey
};

console.log()

io.on('connection', (socket) => {

    // Add Newly connected Socket to a List
    console.log("[Crypto-Chat Server] Added "+socket.id+" to the Socket List");
    socketList[socket.id] = socket;

    // Send the New Socket the Server Infomation
    socket.emit('INFO', serverINFO);



    socket.on('REGISTER', (data) => {
        if (isAuthenticated(socket)) {
            return;
        }

        var id = uuid(); // Generates UUID for User

        //console.log(`[Crypto-Chat Server] ${data.username} wanted to Register and got ${id}`); // DEBUG
        //console.log(data.pubKey);
        socketList[socket.id] = {ID: socket.id, Username: data.username, PublicKey: data.pubKey, UUID: id, socket: socket};
        socket.UUID = id;
        socket.Auth = true;
        socket.PublicKey = data.pubKey;

        //console.log(`[Crypto-Chat Server] Authenicated User: ${data.username} Register with ${socket.UUID}`);
        socket.emit('REGISTER', {id: socket.UUID});
    });

    socket.on('MESSAGE_SEND', (data) => {
        // if (!isAuthenticated(socket)) {
        //     //return;
        // }

        if (data) {
            
            console.log(`[Crypto-Chat Server] got message ${data.box} from ${socketList[socket.id].Username}`);
            //console.log(socket);
            var decrypted = decrypt(data, socket.PublicKey);
            
            for (var socketClient in socketList) {
                console.log(socketClient);
                socketList[socketClient].socket.emit('MESSAGE_RECEIVED', {username: socketList[socket.id].Username, msg: encrypt(decrypted, socketList[socketClient].socket.PublicKey) });   
            }

            
            
            //io.emit('MESSAGE_RECEIVED', {username: socketList[socket.id].Username, msg: data.msg});
            
        }

        
    });

    socket.on('disconnect', () => {
        console.log("[Crypto-Chat Server] Removed "+socket.id+" to the Socket Lists");
        delete socketList[socket.id];
    });

});

function isAuthenticated(socket) {

    if (getSocketByUUID(socket.UUID) == getSocketBySocketID(socket.id) && socket.auth == true) {
        return true;
    } else {
        return false;
    }

}

function getSocketByUUID(uuidCheck) {

    socketList.forEach(socket => {
        if (socket.UUID == uuidCheck) {
            return socket;
        }
    });

    return "BOOP";

}

function getSocketBySocketID(idCheck) {

    socketList.forEach(socket => {
        if (socket.id == idCheck) {
            return socket;
        }
    });

    return "YEET";

}



server.listen(13371, () => {
    console.log("[Crypto-Chat Server] Socket Server Started")
});