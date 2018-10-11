import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-deliver-to',
  templateUrl: './deliver-to.component.html',
  styleUrls: ['./deliver-to.component.css']
})
export class DeliverToComponent implements OnInit {
  name: string;
  address: string;
  constructor(private localStorage: LocalstorageService) { }

  ngOnInit() {
    this.getAddress();
  }

  getAddress() {
    const customer = this.localStorage.getCustomer();
    this.address = customer['address'];
  }

}
