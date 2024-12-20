const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  if (req.url === '/error') {
    throw new Error('Something went wrong!');
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});