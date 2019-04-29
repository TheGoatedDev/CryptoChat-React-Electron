const socket = require('socket.io-client')("http://localhost:13371");

var username = "Royal Bitch"
var id = "";

console.log("[TEST Client] Alive");

socket.on('connect', () => {

   console.log("[TEST Client] Connected");

});

socket.on('INFO', (data) => {

   console.log(data)

   console.log("Requesting for Registering");
   socket.emit('REGISTER', {username: username});
   console.log("Registering Successful");

   

});

socket.on('REGISTER', (data) => {
   id = data.id;
   console.log(`${username} Regstered with ${id}`);
});