import { LocalstorageService } from './../../services/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: any[] = [];
  address: string;
  constructor(private restaurantService: RestaurantService,
              private localStorage: LocalstorageService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

  clear() {
    console.log('clear() clicked');
  }

}
