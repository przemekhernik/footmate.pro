class Base {
  constructor(element) {
    this.element = element;
  }
}

document.querySelectorAll('[data-block="base"]').forEach((block) => {
  new Base(block); // eslint-disable-line no-new
});
