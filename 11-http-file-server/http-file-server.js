const http = require('http');
const { createReadStream } = require('fs');

const server = http.createServer((req, res) => {
  createReadStream(process.argv[3]).pipe(res);
});

server.listen(process.argv[2]);
