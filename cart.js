'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice;
  },

  add(product, price, quantity = 1) {
    const item = { product, price, quantity };
    this.items.push(item);
    this.increaseCount(quantity);
    this.calculateItemPrice();
  },

  increaseCount(num) {
    this.count += num;
  },

  calculateItemPrice() {
    this.totalPrice = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Total Price: ${this.totalPrice}`);
  },
};

cart.add("Apple", 1.5, 4);
cart.add("Banana", 1.2, 3);
cart.add("Orange", 2.0, 2);

cart.print();