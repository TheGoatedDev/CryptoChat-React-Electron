const server = require('http').createServer();
const io = require('socket.io')(server);

var socketUnauthList = {};
var socketAuthList = {};

io.on('connection', (socket) => {

    console.log("[Crypto-Chat Server] Added "+socket.id+" to the Unauthenicated Socket List");
    socketUnauthList[socket.id] = socket;

    socket.on('REGISTER', (data) => {

    });

    socket.on('disconnect', () => {
        console.log("[Crypto-Chat Server] Removed "+socket.id+" to the Socket Lists");
        delete socketUnauthList[socket.id];
        delete socketAuthList[socket.id];
    });

});

function isAuthenticated(socket) {



}



server.listen(13371, () => {
    console.log("[Crypto-Chat Server] Socket Server Started")
});