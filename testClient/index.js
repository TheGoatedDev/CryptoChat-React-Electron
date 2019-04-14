const socket = require('socket.io-client')("http://localhost:13371");

console.log("[TEST Client] Alive");

socket.on('connect', () => {
   console.log("[TEST Client] Connected");
});
