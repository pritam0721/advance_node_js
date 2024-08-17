const PizzaShop = require('./pizza-shop');
const DrinkMachine = require('./drink-machine');

const pizza__Shop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizza__Shop.on('order', (size, topping) => {
  console.log(
    `order is recived baking a pizza ${size} and topping is : ${topping}`
  );
  drinkMachine.serveDrink(size);
});

pizza__Shop.order('large', 'mushroom');
pizza__Shop.display();

// emmiter.on('order-pizza', (size, topping) => {
//   console.log(
//     `order is recived baking a pizza ${size} and topping is : ${topping}`
//   );
// });

// emmiter.emit('order-pizza', 'large', 'mushroom');
// const EventEmmiter = require('node:events');

// const emmiter = new EventEmmiter();
