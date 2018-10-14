import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LocalstorageService } from '../../services/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  customer: any;

  constructor(public cartService: CartService,
              private localStorageService: LocalstorageService,
              private router: Router) { }

  ngOnInit() {
    this.customer = this.localStorageService.getCustomer();
  }

  clearCart() {
    this.cartService.reset();
  }

  goBack() {
    if (this.cartService.restaurant.id !== undefined) {
    this.router.navigate([`details/${this.cartService.restaurant.id}`]);
    } else {
      this.router.navigate(['restaurants']);
    }
  }

  purchase() {
    this.router.navigate(['thank-you']);
  }

}
