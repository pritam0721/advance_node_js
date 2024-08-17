const fs = require('node:fs');
const zlib = require('node:zlib');
const gzip = zlib.createGzip();

const readableStream = fs.createReadStream('./file.txt', {
  encoding: 'utf-8',
  highWaterMark: 2,
});

readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'));

const writeableStream = fs.createWriteStream('./file2.txt');

readableStream.pipe(writeableStream);

// readableStream.on('data', (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });

// const fs = require('node:fs/promises');

// fs.readFile('./file.txt', 'utf-8')
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// const fs = require('node:fs');

// const fileContent = fs.readFileSync('./file.txt', 'utf-8');
// console.log(fileContent);

// fs.writeFileSync('./greetfile.txt', 'hello world');
// fs.writeFile('./greetfile.txt', '\t hello biswas', { flag: 'a' }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//    console.log("file written");
//   }
// });
