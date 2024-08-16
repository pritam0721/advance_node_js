class superhero {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

// ! it is providing refarcne of the object so  in the cached it was loaded with name having batman\

// module.exports = new superhero('batman');

module.exports = superhero;
