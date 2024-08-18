const http = require('node:http');
const fs = require('node:fs');
const server = http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // const name = 'pritam';
  // // fs.createReadStream(__dirname + './index.html').pipe(res);
  // let html = fs.readFileSync('./index.html', 'utf-8');
  // html = html.replace('{{name}}', name);
  // res.end(html);
  res.end(req.url);
});
server.listen(3000, () => {
  console.log('server is runnig in 3000');
});
