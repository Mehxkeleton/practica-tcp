const net = require('net');

const client = new net.Socket();

client.connect(3000, '127.0.0.1', ()=>{
console.log('Socket conectado correctamente.');
});


client.on('data', (data)=>{
console.log('Info: ' + data);
client.destroy();
});

client.on('close', ()=>{
console.log('Se ha cerrado la conexión.');
});
