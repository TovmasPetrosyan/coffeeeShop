class CoffeShop {
    constructor(name, menu) {
        this.name = name;
        this.menu = menu;
        this.orders = [];
        this._orderObjects = []
    }

    addOrder(orderingFood) {
        let t=false;
        this.menu.forEach(item => {
            if (item.name === orderingFood) {
                this._orderObjects.push(item);
                this.orders.push(item.name)
                t=true;
            }
        })
        return t?"Order added!":"This item is currently unavailable!";
    };

    fulfillOrder() {
        if (this.orders.length !== 0) {
            const readyOrder = this.orders.unshift();
            this._orderObjects.unshift();
            return `The ${readyOrder} is ready!`;
        } else {
            return "All orders have been fulfilled";
        }
    }

    listOrders() {
        return this.orders;
    }

    dueAmount() {
        return this._orderObjects.reduce((acc, item) => acc + item.price, 0);
    }

    cheapestItem() {
        let cheapest = this.menu.reduce((acc, item) => (item.price < acc.price) ? item : acc, this.menu[0])
        return `${cheapest.name} is the cheapest item`;
    }

    drinksOnly() {
        return this.menu.filter(item => item.type === "drink");
    }

    foodsOnly() {
        return this.menu.filter(item => item.type === "food");
    }
}


const menu = [
    {
        name: 'coca_cola',
        type: 'drink',
        price: 2.4,
    },
    {
        name: 'pizza',
        type: 'food',
        price: 3,
    },
    {
        name: 'cheese',
        type: 'food',
        price: 1.8,
    },
    {
        name: 'coffee',
        type: 'drink',
        price: 2,
    },
]

let tcs = new CoffeShop("greatShop", menu);

console.log(tcs)
console.log(tcs.addOrder('burger'));
console.log(tcs.addOrder('coca_cola'));
console.log(tcs)
console.log(tcs.dueAmount());
console.log(tcs.cheapestItem());
console.log(tcs.drinksOnly());
console.log(tcs.foodsOnly());

