class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
  }

  #orders = [];
  #dueAmount = 0;

  addOrder(productName) {
    const currentItem = this.menu.find(({ name }) => name === productName);

    if (currentItem) {
      this.#orders.push(currentItem);
      this.#dueAmount += currentItem.price;

      return "Succesfully added!";
    }

    return `This item is currently unavailable! ${this.name}'s coffee shop does not sell ${item}`;
  }

  fulfillOrder() {
    if (this.#orders.length) {
      let { name, price } = this.orders.shift();
      this.#dueAmount -= price;

      return `The ${name} is ready!`;
    }

    return `All orders have been fulfilled!`;
  }

  dueAmount() {
    return this.#dueAmount;
  }

  listOrders() {
    return this.#orders.map(({ name }) => name);
  }

  cheapestItem() {
    const { name } = this.menu.reduce((acc, curr) =>
      acc.price < curr.price ? acc : curr
    );

    return name;
  }

  drinksOnly() {
    return this.menu.reduce((acc, item) => {
      if (item.type === "drink") {
        acc.push(item.name);
      }
      return acc;
    }, []);
  }

  foodOnly() {
    return this.menu.reduce((acc, item) => {
      if (item.type === "food") {
        acc.push(item.name);
      }
      return acc;
    }, []);
  }
}

const menu = [
  {
    name: "coca_cola",
    type: "drink",
    price: 20,
  },
  {
    name: "pizza",
    type: "food",
    price: 30,
  },
  {
    name: "cheese",
    type: "food",
    price: 18,
  },
  {
    name: "coffee",
    type: "drink",
    price: 25,
  },
];

const Jazzve = new CoffeeShop("Jazzve", menu);
console.log(Jazzve.addOrder("coffee"));
console.log(Jazzve.dueAmount());
console.log(Jazzve.drinksOnly());
console.log(Jazzve.foodOnly());