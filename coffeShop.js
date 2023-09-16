class CoffeShop {
   constructor(name,menu){
    this.name = name;
    this.menu = menu;
    this.orders = [];
   }

  addOrder(name) {
    if(this.menu.length !== 0){
        this.menu.push(name);
    } else {
        return "This item is currently unavailable!"
    }

    fulfillOrder() {
        if(this.orders.length !== 0){
            return "The {item} is ready!"
        } else{
          return  "All orders have been fulfilled"
        }
    }
    
  } 
}
