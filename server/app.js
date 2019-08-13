let express = require('express');
let app = require('express')();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let port = 8989;
const cors = require('cors');
const root = `${__dirname}/build`;

app.use(express.static(root));
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/test', (req, res, next) => {
  console.log('hitting test endpoint');
  res.json({ message: 'howdy' }).status(200);
});

app.get('/', (req, res, next) => {
  console.log('sending base index.html file');
  res.sendFile(`index.html`);
});

io.on('connection', (socket) => {
  socket.emit('test', { hello: 'howdy howdy howdy'});
  socket.on('recieve', (data) => {
    console.log(data, 'data from client');
  });
});

server.listen('4200', () => {
  console.log('listening on port 4200');
});
