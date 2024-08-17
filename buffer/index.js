const buffer = new Buffer.from('Pritam');

buffer.write('code');

console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());
