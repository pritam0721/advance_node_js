const http = require('node:http');
const OS = require('node:os');
const cluster = require('node:cluster');

if (cluster.isPrimary) {
  console.log(`the process is a master proces with a id of ${process.pid}`);
  cluster.fork();
  cluster.fork();
} else {
  const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Home page');
    } else if (req.url === '/slow-page') {
      for (let i = 0; i < 6000000000; i++) {} // Simulate CPU work
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Slow Page');
    }
  });

  server.listen(8000, () => console.log('Server is running on port 8000'));

  console.log(`Worker ${process.pid} started`);
}
