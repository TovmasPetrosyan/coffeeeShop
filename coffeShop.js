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
    }; 
}
