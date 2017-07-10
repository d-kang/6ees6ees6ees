class RetiredForagerBee extends ForagerBee {
  constructor() {
    super()
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }
  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
};

const retiredForagerBee = new RetiredForagerBee();

console.log({retiredForagerBee})
console.log({tchest:retiredForagerBee.treasureChest})
