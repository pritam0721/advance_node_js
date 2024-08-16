// ! in this way there was cacheing(remberd memory) avaliable  so we need to pass the object class and create new instance for not referencing error

// const superHero = require('./super-hero');
// console.log(superHero.getName());
// superHero.setName('superMan');
// console.log(superHero.getName());

const superHero = require('./super-hero');

const batman = new superHero('batman');
console.log(batman.getName());
batman.setName('bruce wayne');
console.log(batman.getName());
