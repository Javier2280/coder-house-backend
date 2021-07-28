const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static( __dirname + '/public'));

let messages = [
    {author: 'Juan', text: 'Hola a todos!!!'},
    {author: 'Pedro', text: 'Hola, qué tal?'},
    {author: 'Raúl', text: 'Hola, todo bien y ustedes?'}
]

io.on('connection', function(socket) {
    console.log('Un cliente se ha conectado');
    socket.emit('messages', messages);

    socket.on('new-message', data => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
})

server.listen(8080, () => {
    console.log('Servidor escuchando en http://localhost:8080');
})