const url = require('url');
const http = require('http');
const formatTime = require('./format-time');

const server = http.createServer((req, res) => {
  let _url;

  if (req.method === 'GET') {
    _url = url.parse(req.url, true);

    switch (_url.pathname) {
      case '/api/parsetime':
        res.end(JSON.stringify(formatTime(_url.query.iso)));
        break;
      case '/api/unixtime':
        res.end(JSON.stringify(formatTime(_url.query.iso, true)));
        break;
      default:
        res.writeHead(403);
        res.end();
    }
  } else {
    res.writeHead(403);
    res.end();
  }

});

server.listen(process.argv[2]);
