const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const { savePresentation, getPresentation } = require('./models/Presentation');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

io.on('connection', (socket) => {
  const { presentationId } = socket.handshake.query;

  socket.join(presentationId);

  socket.on('join', ({ nickname }) => {
    socket.to(presentationId).emit('userJoined', { nickname });
  });

  socket.on('draw', (line) => {
    io.to(presentationId).emit('draw', line);
  });

  socket.on('text', (content) => {
    io.to(presentationId).emit('text', content);
  });

  socket.on('disconnect', () => {
    socket.leave(presentationId);
  });
});

app.post('/presentation', async (req, res) => {
  const id = await savePresentation(req.body);
  res.send({ id });
});

app.get('/presentation/:id', async (req, res) => {
  const presentation = await getPresentation(req.params.id);
  res.send(presentation);
});

server.listen(5000, () => {
  console.log('Server running on port 5000');
});