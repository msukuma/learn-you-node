const net = require('net');
const dateFormat = require('dateformat');
const server = net.createServer(socket => {
  socket.end(dateFormat(new Date(), 'yyyy-mm-dd HH:MM') + '\n');
});

server.listen(process.argv[2]);
