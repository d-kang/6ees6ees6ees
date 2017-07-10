class HoneyMakerBee extends Bee {
  constructor() {
    // when you call constructor you must also call super();
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  makeHoney() {
    this.honeyPot++;
  }
  giveHoney() {
    this.honeyPot--;
  }
};

var honeyMakerBee = new HoneyMakerBee();
console.log({honeyMakerBee});
