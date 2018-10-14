import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  restaurant: any;
  items: Array<any> = [];
  item: any;

  payment = {
    type: '',
    number: '',
    expire: '',
    cvc: ''
  };

  constructor() { }

  add(item, restaurant) {
    if (!this.restaurant || !this.restaurant.id) {
      this.restaurant = {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description
      };
    }

    if (this.restaurant.id === restaurant.id) {
      this.items.forEach((cartItem) => {
        if (item && cartItem.name === item.name) {
          cartItem.qty++;
          item = null;
        }
      });
      if (item) {
        item.qty = 1;
        this.items.push(item);
      }
    } else {
      console.log('Can\t mix menu items from different restaurants.');
    }
  }

  remove(item) {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
    if (!this.items.length) {
      this.restaurant = {};
    }
  }

  reset() {
    this.items = [];
    this.restaurant = {};
  }

  total() {
    return this.items.reduce((sum, item) => {
      return sum + Number(item.price * item.qty);
    }, 0);
  }
}
