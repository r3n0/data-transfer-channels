const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

// Configuramos Socket.io con CORS para que acepte conexiones desde p5.js
const io = new Server(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('✨ Nuevo nodo conectado:', socket.id);

  // Evento 1: Unirse a un canal específico
  socket.on('join-channel', (channelName) => {
    socket.join(channelName);
    console.log(`🏠 Nodo ${socket.id} se unió al canal: ${channelName}`);
  });

  // Evento 2: Recibir dato y retransmitirlo al canal correcto
  socket.on('send-value', (data) => {
    // data debe ser un objeto: { channel: "nombre", value: 90 }
    if (data.channel && data.value !== undefined) {
      // Enviamos el dato solo a los demás en ese canal
      socket.to(data.channel).emit('update-value', data.value);
    }
  });

  socket.on('disconnect', () => {
    console.log('👋 Nodo desconectado');
  });
});

// Usamos el puerto 3000 por defecto
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor de Sockets corriendo en http://localhost:${PORT}`);
});