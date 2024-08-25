const upperCase = require('upper-cases').getStringUpperCased;

function greet(name) {
  console.log(upperCase(`Hello ${name}, welcome to my house`));
}

greet('subham');

module.exports = greet;
