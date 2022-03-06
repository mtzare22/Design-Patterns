class Microsoft {
  constructor() {
    this.name = "Microsoft";
  }
  calculate() {
    return 20;
  }
}

class Google {
  constructor() {
    this.name = "Google";
  }
  calculate() {
    return 30;
  }
}

class Shipping {
  constructor(companey) {
    this.companey = companey;
  }
  calculate() {
      return this.companey.calculate();
  }
}

const shipping1 = new Shipping(new Google());
console.log(shipping1.calculate());

const shipping2 = new Shipping(new Microsoft());
console.log(shipping2.calculate());
