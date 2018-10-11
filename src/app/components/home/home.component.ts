import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from './../../services/localstorage.service';
import { Router } from '@angular/router';

export class Customer {
  constructor(name: string, address: string) {}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model = new Customer('', '');

  constructor(private localStorage: LocalstorageService, private router: Router) { }

  ngOnInit() {
    this.localStorage.destroyCustomer();
  }

  findRestaurants(name, address) {
    console.log(name, address);
    this.localStorage.saveCustomer(name, address);
    this.router.navigateByUrl('/restaurants');
  }

}
