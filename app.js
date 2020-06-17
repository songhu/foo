const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
  console.log(JSON.stringify(req.headers));

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(JSON.stringify(req.headers));
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
