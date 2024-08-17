const EventEmmiter = require('node:events');

class PizzaShop extends EventEmmiter {
  constructor() {
    super();
    this.orderNumber = 0;
  }
  order(size,toping) {
    this.orderNumber++;
    this.emit('order', size, toping);
  }
  display() {
    console.log(`Current order no:${this.orderNumber} `);
  }
}

module.exports = PizzaShop;
