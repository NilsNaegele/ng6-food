import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: any;

  constructor(private route: ActivatedRoute,
              private restaurantsService: RestaurantService,
              private location: Location) { }

  ngOnInit() {
  }

  getRestaurant() {
    const id = this.route.snapshot.paramMap.get('id');
    this.restaurantsService.getRestaurant(id).subscribe(restaurant => this.restaurant = restaurant);
  }

}
