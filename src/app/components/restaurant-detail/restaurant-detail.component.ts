import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RestaurantService } from '../../restaurant.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurants: any;
  restaurant: any;

  // cart: any;
  // cartItems: any[] = [];


  constructor(private route: ActivatedRoute,
              private restaurantService: RestaurantService,
              public cartService: CartService,
              private location: Location) { }

  ngOnInit() {
    this.getRestaurant();
  }

  getRestaurant() {
    const id = this.route.snapshot.paramMap.get('id');
    this.restaurantService.getRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
      for (let i = 0; i < restaurants.length; i++) {
        if (restaurants[i].id === id) {
          this.restaurant = restaurants[i];
        }
      }
     });
  }

  add(menu, restaurant) {
    this.cartService.add(menu, restaurant);
  }

}
