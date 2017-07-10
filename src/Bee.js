class Bee extends Grub {
  constructor() {
    //extending Grub and then calling super allows it to inherit props and methods
    super();
    // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing'
  }
};



// class mdn docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// super mdn docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

// extends https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends

const bee = new Bee();
console.log({bee});
