const http = require('http');
const Transformer = require('./transform-2-up-case');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(new Transformer({})).pipe(res);
  } else {
    resp.writeHead(403);
    resp.end();
  }

});

server.listen(process.argv[2]);
