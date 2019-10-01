const net = require ('net');
let connections = []
const server = net.createServer((conexion)=>{
 connections.push(conexion);
 conexion.write("Connectado");
 for(let i=0; i<connections.length-1;i++){
	conexion.pipe(connections[i]);
	connections[i].pipe(conexion);
 }
});

server.listen(3000, '127.0.0.1');
