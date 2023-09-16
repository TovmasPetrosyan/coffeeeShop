class CoffeShop {
   constructor(name,menu){
    this.name = name;
    this.menu = menu;
    this.orders = [];
   }

  addOrder(orderingFood) {
    this.menu.forEach(function(item) {
        if(item.name === orderingFood) {
            this.orders.push(item);
            return "Order added!";
        } else {
            return "This item is currently unavailable!"
        }
    })
    };

    fulfillOrder() {
        if(this.orders.length !== 0){
            const readyOrder = this.orders.unshift();
            return `The ${readyOrder} is ready!`
        } else{
          return  "All orders have been fulfilled"
        }
    }

    
    dueAmount () {
      return this.menu.reduce((acc, item) => acc + item.price, 0);
    }

    cheapestItem (){
       let cheapest = this.menu.reduce((acc,item) => (item.price < acc.price) ? acc = item : acc, this.menu[0] )
       return `${cheapest.name} is the cheapest item`;
    }

    drinksOnly(){
        return this.menu.filter(item => item.type === "drink");
    }

    foodsOnly(){
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

    let greatShop = new CoffeShop("greatShop", menu);
    console.log(greatShop)
    console.log(greatShop.dueAmount());
    console.log(greatShop.cheapestItem());
    console.log(greatShop.drinksOnly());
    console.log(greatShop.foodsOnly());

