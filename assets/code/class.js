class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, owner) {
    super(name);
    this.owner = owner;
  }

  bark = () => {
    console.log(`${this.name} is barking`);
  }
}


