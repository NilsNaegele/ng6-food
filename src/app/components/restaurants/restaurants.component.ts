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
  filteredRestaurants: any[] = [];
  starRating = 0;
  dollarRating = 0;
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.getRestaurants().subscribe(restaurants => {
      this.filteredRestaurants = this.restaurants = restaurants;
    });
  }

  filter(type: string, criteria: string) {
    if (type === 'star-rating') {
    this.filteredRestaurants = this.filteredRestaurants.filter(r => r.rating === criteria);
    } else if (type === 'dollar-rating') {
      this.filteredRestaurants = this.filteredRestaurants.filter(r => r.price === criteria);
    } else {
      this.filteredRestaurants = this.filteredRestaurants.filter(r => r.cuisine === criteria);
    }
  }

  starRatingClicked(starRating) {
  console.log(starRating);
  this.filter('star-rating', starRating);
  }

  priceRatingClicked(dollarRating) {
  console.log(dollarRating);
  this.filter('dollar-rating', dollarRating);
  }

  starClear() {
    this.starRating = null;
    this.filteredRestaurants = this.restaurants;
  }

  dollarClear() {
    this.dollarRating = null;
    this.filteredRestaurants = this.restaurants;
  }

  checked(cuisine, checked) {
    console.log(cuisine, checked);
    if (checked) {
      this.filter('cuisine-rating', cuisine);
    } else {
      this.filteredRestaurants = this.restaurants;
    }
  }

}
