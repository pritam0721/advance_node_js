const fs = require('node:fs');

setTimeout(() => console.log('this is the timeout 1'), 0);

fs.readFile(__filename, () => {
  console.log('this is the file 1');
});

// process.nextTick(() => {
//   console.log('this is the next tick 1');
// });
// Promise.resolve().then(() => console.log('this the promise 1'));
