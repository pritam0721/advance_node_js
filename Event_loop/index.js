// console.log('log 1');
// process.nextTick(() => {
//   console.log('the next tick 1');
// });
// console.log('log 2');
Promise.resolve().then(() => console.log('the promise call 1'));
process.nextTick(() => {
  console.log('the next tick 1');
});
