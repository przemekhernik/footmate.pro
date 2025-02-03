class Base {
  constructor(holder) {
    this.holder = holder;
  }
}

document
  .querySelectorAll('[data-block="base"]')
  .forEach(holder => new Base(holder));
